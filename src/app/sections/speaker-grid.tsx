"use client";
import React, { useEffect, useState } from "react";
import { EventSpeaker } from "./event-speaker";
import { SpeakerCard } from "./speaker-card";
import type { SpeakerGroup } from "@/app/data/speakers";

interface SpeakerGridProps extends SpeakerGroup {
  shuffle?: boolean;
  // Cards shown before "View More"; omit to always show everyone
  initialCount?: number;
}

const SpeakerGrid: React.FC<SpeakerGridProps> = ({
  speakers,
  comingSoon = 0,
  shuffle = false,
  initialCount,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const [orderedSpeakers, setOrderedSpeakers] = useState(speakers);

  useEffect(() => {
    setOrderedSpeakers(
      shuffle ? [...speakers].sort(() => Math.random() - 0.5) : speakers,
    );
  }, [speakers, shuffle]);

  const canCollapse =
    initialCount !== undefined && orderedSpeakers.length > initialCount;
  const displayedSpeakers =
    canCollapse && !viewMore
      ? orderedSpeakers.slice(0, initialCount)
      : orderedSpeakers;

  return (
    <>
      <div className="grid md:grid-cols-5 gap-5">
        {displayedSpeakers.map((speaker) => (
          <EventSpeaker
            key={speaker.name}
            name={speaker.name}
            company={speaker.company}
            bio={speaker.bio}
            image={speaker.image}
          />
        ))}
        {Array.from({ length: comingSoon }, (_, index) => (
          <SpeakerCard
            key={`coming-soon-${index}`}
            name=""
            title=""
            bgColor="bg-black"
            comingSoon
          />
        ))}
      </div>

      {canCollapse && (
        <div className="flex justify-center py-8">
          <button
            onClick={() => setViewMore(!viewMore)}
            className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default SpeakerGrid;
