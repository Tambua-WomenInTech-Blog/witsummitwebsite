"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Hand, Loader2, Mail } from "lucide-react";
import styles from "./event-register.module.css";
import QrScanner from "./qr-scanner";

type CheckInState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "checked_in"; firstName: string }
  | { kind: "already_checked_in" }
  | { kind: "not_found" }
  | { kind: "rate_limited" }
  | { kind: "error" };

const CONFETTI_COLOURS = ["#f472b6", "#c084fc", "#818cf8", "#fbbf24", "#2dd4bf"];
const CONFETTI_PIECES = 36;

// Golden-angle spacing spreads the pieces evenly without any randomness.
const confetti = Array.from({ length: CONFETTI_PIECES }, (_, index) => {
  const angle = index * 2.39996;
  const distance = 90 + (index % 6) * 26;
  return {
    "--x": `${Math.round(Math.cos(angle) * distance)}px`,
    "--y": `${Math.round(Math.sin(angle) * distance)}px`,
    "--spin": `${180 + index * 47}deg`,
    "--delay": `${(index % 5) * 30}ms`,
    backgroundColor: CONFETTI_COLOURS[index % CONFETTI_COLOURS.length],
  } as React.CSSProperties;
});

async function submitCheckIn(email: string, token: string): Promise<CheckInState> {
  const response = await fetch("/api/event-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, token }),
  });
  if (response.status === 429) {
    return { kind: "rate_limited" };
  }
  if (!response.ok) {
    return { kind: "error" };
  }

  const data = await response.json();
  switch (data.status) {
    case "checked_in":
      return { kind: "checked_in", firstName: data.firstName };
    case "already_checked_in":
      return { kind: "already_checked_in" };
    case "not_found":
      return { kind: "not_found" };
    default:
      return { kind: "error" };
  }
}

function alertMessage(state: CheckInState): string | null {
  switch (state.kind) {
    case "not_found":
      return "Not on the list, please go to the desk";
    case "rate_limited":
      return "Too many attempts, wait a moment and try again";
    case "error":
      return "Something went wrong, please try again or go to the desk";
    default:
      return null;
  }
}

const AnimatedCheck: React.FC = () => (
  <svg viewBox="0 0 52 52" className={styles.checkSvg} aria-hidden="true">
    <path d="M14 27l8 8 16-18" className={styles.checkPath} />
  </svg>
);

const CheckInForm: React.FC = () => {
  const token = useSearchParams().get("k");
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<CheckInState>({ kind: "idle" });
  const [attempt, setAttempt] = useState(0);

  if (!token) {
    // replace, not push: Back skips the scanner instead of reopening it.
    return (
      <QrScanner
        onToken={(scanned) =>
          router.replace(`${pathname}?k=${encodeURIComponent(scanned)}`)
        }
      />
    );
  }

  const isLoading = state.kind === "loading";
  const message = alertMessage(state);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isLoading) return;

    setState({ kind: "loading" });
    setAttempt((count) => count + 1);
    try {
      const result = await submitCheckIn(email, token);
      setState(result);
      if (result.kind === "checked_in" || result.kind === "already_checked_in") {
        setEmail("");
      }
    } catch {
      setState({ kind: "error" });
    }
  };

  const startOver = () => setState({ kind: "idle" });
  const isFinished =
    state.kind === "checked_in" || state.kind === "already_checked_in";

  return (
    <>
      {!isFinished && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className={styles.label}>Your registered email</span>
            <span className={styles.field}>
              <Mail size={20} className={styles.fieldIcon} aria-hidden="true" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@email.com"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
              />
            </span>
          </label>
          <button type="submit" disabled={isLoading} className={styles.button}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                Checking you in...
              </>
            ) : (
              <>
                Check me in
                <ArrowRight size={20} aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      )}

      <div aria-live="polite">
        {state.kind === "checked_in" && (
          <div className={styles.panel}>
            <div className={styles.burst} aria-hidden="true">
              {confetti.map((style, index) => (
                <span key={index} className={styles.confetti} style={style} />
              ))}
            </div>
            <div className={`${styles.badge} ${styles.badgeSuccess}`}>
              <AnimatedCheck />
            </div>
            <p className={styles.panelTitle}>
              Welcome {state.firstName},
              <br />
              you're checked in
            </p>
            <p className={styles.panelText}>Enjoy the summit!</p>
          </div>
        )}

        {state.kind === "already_checked_in" && (
          <div className={styles.panel}>
            <div className={`${styles.badge} ${styles.badgeWarning}`}>
              <Hand size={36} aria-hidden="true" />
            </div>
            <p className={styles.panelTitle}>Already checked in</p>
            <p className={styles.panelText}>
              You're all set. If this wasn't you, please go to the desk.
            </p>
          </div>
        )}

        {message && (
          <p key={attempt} className={styles.alert}>
            {message}
          </p>
        )}
      </div>

      {isFinished && (
        <button type="button" onClick={startOver} className={styles.ghostButton}>
          Check in another email
        </button>
      )}
    </>
  );
};

export default CheckInForm;
