"use client";
import React from "react";
import SpeakerGrid from "./speaker-grid";
import type { SpeakerGroup, SpeakerLineup } from "@/app/data/speakers";

interface SpeakersSectionProps {
  lineup: SpeakerLineup;
}

const hasContent = (group: SpeakerGroup) =>
  group.speakers.length > 0 || (group.comingSoon ?? 0) > 0;

// Renders any edition's lineup. The home page uses LatestSpeakersSection;
// /past-events/<year> passes that year's lineup.
const SpeakersSection: React.FC<SpeakersSectionProps> = ({ lineup }) => {
  const { keynotes, panelists, speakers } = lineup;

  return (
    <section
      id="speakers"
      className="pb-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {hasContent(keynotes) && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Keynote Speakers
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              "I'm building the space I wish existed when I was starting out."
              – Maureen Josephine
            </p>

            <SpeakerGrid {...keynotes} />
          </div>
        )}

        {hasContent(panelists) && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Panelists
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Different perspectives. Shared wisdom. Their experiences connect
              the dots in ways only real journeys can.
            </p>

            <SpeakerGrid {...panelists} shuffle initialCount={10} />
          </div>
        )}

        {hasContent(speakers) && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Speakers</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Real voices. Honest journeys. Everything they say will land
              differently—because they've walked where you're walking.
            </p>

            <SpeakerGrid {...speakers} shuffle initialCount={10} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeakersSection;
