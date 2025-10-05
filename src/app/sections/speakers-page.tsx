import { Mic } from "lucide-react";
import Link from "next/link";
import SpeakersSection from "./speaker-selection";

export default function Speakers() {
  const speakers = [
    {
      name: "Maureen Josephine",
      role: "Chief Innovator",
      company: "",
      image: "/api/placeholder/300/300",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "Aisha Njeri",
      role: "Software Engineer",
      company: "Microsoft ADC",
      image: "/api/placeholder/300/300",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Brenda Muthoni",
      role: "Project Manager",
      company: "Safaricom",
      image: "/api/placeholder/300/300",
      gradient: "from-pink-600 to-purple-500",
    },
  ];

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
                  Meet the Speakers
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
                Meet the Women Leading the Conversation
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                These aren't just speakers—they're trailblazers who've navigated your challenges,
                celebrated breakthrough moments, and are ready to accelerate your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                  Want to speak? Apply now
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                  See Full Lineup
                </button>
              </div>
            </div>
          </div>
          <SpeakersSection />
        </div>
      </section>
    </>
  );
}
