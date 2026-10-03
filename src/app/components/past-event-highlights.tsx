"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MapPin, Play, X } from "lucide-react";

const VIDEO_ID = "YCfG3QhgF4A";
const VIDEO_TITLE = "WITSummit 2025 highlights";

const embedUrl = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
const thumbMax = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const thumbFallback = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

interface VideoDialogProps {
  open: boolean;
  onClose: () => void;
}

const VideoDialog: React.FC<VideoDialogProps> = ({ open, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(false);

  // Drives the enter transition
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(id);
      setShown(false);
    };
  }, [open]);

  // Escape to close, lock body scroll, focus the close button
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={VIDEO_TITLE}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 motion-reduce:transition-none ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-indigo-950/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-5xl transition-transform duration-300 motion-reduce:transition-none ${
          shown ? "scale-100" : "scale-95"
        }`}
      >
        {/* Glow behind the player */}
        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-indigo-500/40 blur-3xl" />

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-14 right-0 inline-flex items-center space-x-2 h-10 pl-4 pr-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>

        {/* Gradient frame */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-purple-400/70 via-pink-400/50 to-indigo-400/70 shadow-2xl">
          <div className="aspect-video w-full overflow-hidden rounded-[calc(1.5rem-2px)] bg-black">
            {/* Iframe only exists while open, so closing the dialog stops playback */}
            <iframe
              src={embedUrl}
              title={VIDEO_TITLE}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PastEventHighlights: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [thumb, setThumb] = useState(thumbMax);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative z-10 px-6 md:px-12 py-16 md:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-5 leading-tight">
          Women In Tech Summit 2025
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Relive the moments, sessions, and energy from the Nairobi edition.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="pointer-events-none absolute -inset-6 md:-inset-10 rounded-[3rem] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-indigo-500/30 blur-3xl" />

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          onMouseMove={handleMouseMove}
          aria-label={`Play video: ${VIDEO_TITLE}`}
          className="group relative block w-full aspect-[4/5] sm:aspect-video overflow-hidden rounded-3xl md:rounded-[2rem] bg-black shadow-2xl ring-1 ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
        >
          {/* Plain img: YouTube thumbnails need no Next image domain config */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 120) setThumb(thumbFallback);
            }}
            onError={() => setThumb(thumbFallback)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-pink-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/20 to-transparent" />

          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.16), transparent 45%)",
            }}
          />

          <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 flex items-center justify-between">
            <span className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <MapPin className="w-4 h-4 text-white" />
              <span>Nairobi, Kenya</span>
            </span>
            <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              2025 Edition
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/15 backdrop-blur-md border border-white/40 shadow-2xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
              <span className="absolute inset-0 rounded-full border border-white/50 animate-ping motion-reduce:animate-none" />
              <span className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl">
                <Play className="w-6 h-6 md:w-9 md:h-9 ml-1 text-white fill-white" />
              </span>
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:px-8 md:py-6 text-left shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold font-space-grotesk mb-1">
                Highlights from 2025
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Watch the recap of two days of sessions, speakers, and
                community.
              </p>
            </div>

            <span className="inline-flex items-center justify-center space-x-2 self-start md:self-auto shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 px-6 py-3 font-semibold text-white shadow-lg transition-colors">
              <Play className="w-4 h-4 fill-white" />
              <span>Watch recap</span>
            </span>
          </div>
        </button>
      </div>

      <VideoDialog open={open} onClose={close} />
    </div>
  );
};

export default PastEventHighlights;
