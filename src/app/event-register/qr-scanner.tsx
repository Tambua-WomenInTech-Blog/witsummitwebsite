"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Camera, QrCode } from "lucide-react";
import { tokenFromScannedText } from "./check-in-link";
import styles from "./event-register.module.css";

const SCAN_INTERVAL_MS = 200;
const MAX_FRAME_SIZE = 640;

type ScanState =
  | { kind: "idle" }
  | { kind: "scanning"; wrongCode: boolean }
  | { kind: "denied" }
  | { kind: "unavailable" };

type DetectCodes = (video: HTMLVideoElement) => Promise<string[]>;

// The browser's built-in detector isn't in TypeScript's DOM types yet.
type NativeBarcodeDetector = {
  detect(source: HTMLVideoElement): Promise<{ rawValue: string }[]>;
};
type BarcodeDetectorClass = {
  new (options: { formats: string[] }): NativeBarcodeDetector;
  getSupportedFormats(): Promise<string[]>;
};

// Uses the built-in detector where there is one (Chrome on Android). Elsewhere,
// including iPhones, it loads jsQR, only once someone starts scanning.
async function createDetector(): Promise<DetectCodes> {
  const Native = (window as { BarcodeDetector?: BarcodeDetectorClass })
    .BarcodeDetector;
  if (Native && (await Native.getSupportedFormats()).includes("qr_code")) {
    const detector = new Native({ formats: ["qr_code"] });
    return async (video) =>
      (await detector.detect(video)).map((code) => code.rawValue);
  }

  const { default: jsQR } = await import("jsqr");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  return async (video) => {
    if (!context || video.videoWidth === 0) {
      return [];
    }
    const scale = Math.min(
      1,
      MAX_FRAME_SIZE / Math.max(video.videoWidth, video.videoHeight),
    );
    canvas.width = Math.round(video.videoWidth * scale);
    canvas.height = Math.round(video.videoHeight * scale);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const frame = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(frame.data, frame.width, frame.height, {
      inversionAttempts: "dontInvert",
    });
    return code ? [code.data] : [];
  };
}

function cameraErrorState(error: unknown): ScanState {
  const name = error instanceof Error ? error.name : "";
  return name === "NotAllowedError" || name === "SecurityError"
    ? { kind: "denied" }
    : { kind: "unavailable" };
}

const QrScanner: React.FC<{ onToken: (token: string) => void }> = ({
  onToken,
}) => {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [state, setState] = useState<ScanState>({ kind: "idle" });

  const stopCamera = useCallback(() => {
    clearTimeout(timer.current);
    stream.current?.getTracks().forEach((track) => track.stop());
    stream.current = null;
  }, []);

  // Turn the camera off whenever the scanner goes away.
  useEffect(() => stopCamera, [stopCamera]);

  const startScanning = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setState({ kind: "unavailable" });
      return;
    }

    try {
      stream.current = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setState({ kind: "scanning", wrongCode: false });

      const element = video.current;
      if (!element) return;
      element.srcObject = stream.current;
      await element.play();
      const detect = await createDetector();

      const scan = async () => {
        if (!stream.current) return;
        try {
          for (const text of await detect(element)) {
            const token = tokenFromScannedText(text);
            if (token) {
              stopCamera();
              onToken(token);
              return;
            }
            setState({ kind: "scanning", wrongCode: true });
          }
        } catch {
          // A frame that can't be read yet; try the next one.
        }
        timer.current = setTimeout(scan, SCAN_INTERVAL_MS);
      };
      scan();
    } catch (error) {
      stopCamera();
      setState(cameraErrorState(error));
    }
  };

  const cancel = () => {
    stopCamera();
    setState({ kind: "idle" });
  };

  const isScanning = state.kind === "scanning";

  return (
    <div className={styles.panel}>
      {/* Kept mounted so the stream can attach as soon as access is granted. */}
      <div className={isScanning ? styles.viewfinder : "hidden"}>
        <video
          ref={video}
          muted
          playsInline
          aria-label="Camera preview"
          className={styles.viewfinderVideo}
        />
        <span className={styles.viewfinderFrame} aria-hidden="true" />
        <span className={styles.scanLine} aria-hidden="true" />
      </div>

      {!isScanning && (
        <div className={styles.scanIcon} aria-hidden="true">
          <QrCode size={44} />
          <span className={styles.scanLine} />
        </div>
      )}

      <p className={styles.panelTitle}>
        {isScanning ? "Point your camera at the QR code" : "Please scan the QR code at the venue"}
      </p>

      <div aria-live="polite">
        {state.kind === "scanning" && state.wrongCode && (
          <p className={styles.alert}>That isn't the check-in QR code</p>
        )}
        {state.kind === "denied" && (
          <p className={styles.alert}>
            Camera access is blocked. Allow it in your browser settings, or scan with
            your camera app.
          </p>
        )}
        {state.kind === "unavailable" && (
          <p className={styles.alert}>
            The camera isn't available here. Scan the code with your camera app instead.
          </p>
        )}
      </div>

      {isScanning ? (
        <button type="button" onClick={cancel} className={styles.ghostButton}>
          Cancel
        </button>
      ) : (
        <button
          type="button"
          onClick={startScanning}
          className={`${styles.button} mt-5`}
        >
          <Camera size={20} aria-hidden="true" />
          Tap to allow camera
        </button>
      )}
    </div>
  );
};

export default QrScanner;
