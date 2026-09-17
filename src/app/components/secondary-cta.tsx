"use client";
import React from "react";
import { Calendar, Mic } from "lucide-react";
import Link from "next/link";

/**
 * Controls which secondary CTA is shown in the hero.
 *
 * true  -> "Apply to Speak" (links to the Pretalx CFP)
 * false -> "Summit Agenda" (jumps to the #agenda section)
 *
 * Flip this back to `true` when the call for papers reopens.
 */
export const IS_CALL_FOR_PAPERS_OPEN = false;

const CFP_URL = "https://pretalx.com/witsummitkenya/cfp";

const ctaClassName =
  "bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2";

interface SecondaryCtaProps {
  /** When true, shows "Apply to Speak"; otherwise shows "Summit Agenda". */
  isCallForPapersOpen?: boolean;
  /** Anchor id used by the schedule variant. */
  scheduleSectionId?: string;
  /** Optional click handler, e.g. to close the mobile menu or fire analytics. */
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const SecondaryCta: React.FC<SecondaryCtaProps> = ({
  isCallForPapersOpen = IS_CALL_FOR_PAPERS_OPEN,
  scheduleSectionId = "agenda",
  onClick,
  className,
}) => {
  const classes = className ? `${ctaClassName} ${className}` : ctaClassName;

  if (isCallForPapersOpen) {
    return (
      <Link
        href={CFP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        <Mic className="w-5 h-5" />
        <span>Apply to Speak</span>
      </Link>
    );
  }

  return (
    <Link
      href={`#${scheduleSectionId}`}
      onClick={onClick}
      className={classes}
    >
      <Calendar className="w-5 h-5" />
      <span>Summit Agenda</span>
    </Link>
  );
};

export default SecondaryCta;