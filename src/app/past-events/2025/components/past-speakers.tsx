import SpeakersSection from "@/app/sections/speaker-selection";
import { Mic } from "lucide-react";

export default function PastSpeakers() {
  return (
    <>
      <section id="speakers">
        <div
          id="speakers"
          className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50"
        >
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <div className="inline-flex mb-16 items-center space-x-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 border border-purple-200">
                <Mic className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
                  2025 Keynote Speakers
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
                The Women Who Led the Conversation
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                These weren't just speakers—they were trailblazers who shared
                their journeys, celebrated breakthrough moments, and inspired
                the next generation of women in tech at WITSummit 2025.
              </p>
            </div>
          </div>
          <SpeakersSection />
        </div>
      </section>
    </>
  );
}
