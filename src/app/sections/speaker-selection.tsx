"use client";
import React from "react";
import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  title: string;
  bgColor: string;
  image?: string | null;
  comingSoon?: boolean;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  image,
  comingSoon = false,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`h-60 relative overflow-hidden`}>
        {!comingSoon ? (
          image ? (
            <Image src={image} alt={name} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full"></div>
            </div>
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto relative transform rotate-12">
                <div className="absolute -top-2 -right-2">
                  <div className="w-3 h-3 bg-purple-500 transform rotate-45"></div>
                  <div className="w-2 h-2 bg-purple-500 transform rotate-45 absolute -top-1 -right-1"></div>
                  <div className="w-4 h-4 bg-purple-500 transform rotate-45 absolute -top-2 right-1"></div>
                </div>
                <svg
                  className="w-10 h-10 text-white transform -rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.17 0-.33.06-.46.14-.85.29-1.76.46-2.66.46-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.57-.45 3.03-1.24 4.26-.14.22-.22.48-.22.74 0 .78.63 1.41 1.41 1.41.35 0 .68-.13.93-.37C20.55 16.17 22 14.21 22 12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </div>

              <div className="relative">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm transform -rotate-3 shadow-lg">
                  COMING
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-sm transform rotate-3 shadow-lg -mt-2">
                  SOON!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-purple-800 text-white p-4 relative">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {comingSoon ? (
              <div className="mb-2 flex items-center space-x-2">
                <div className="w-48 h-3 bg-purple-500/50 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <p className="text-sm text-purple-200 mb-1">{title}</p>
            )}
            {comingSoon ? (
              <div className="flex items-center space-x-2">
                <div className="w-24 h-3 bg-purple-500/50 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <h3 className="text-lg font-bold">{name}</h3>
            )}
          </div>
          {/* <ArrowUpRight className="w-5 h-5 text-purple-200" /> */}
        </div>
      </div>
    </div>
  );
};

const SpeakersSection: React.FC = () => {
  const keynoteSpeakers = [
    {
      name: "Maureen Josephine",
      title: "Chief Innovator",
      company: "TechCorp",
      bgColor: "bg-purple-700",
      image: "/api/placeholder/400/400",
    },
  ];

  const speakers = [
    {
      name: "Ruth Mwikali",
      title: "Founder",
      company: "TechHER Africa",
      bgColor: "bg-purple-500",
      image: "/api/placeholder/400/400",
    },
  ];

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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Keynote Speakers
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            "I'm building the space I wish existed when I was starting out." –
            Maureen Josephine
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {keynoteSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                title={speaker.title}
                bgColor={speaker.bgColor}
                image={speaker.image}
                comingSoon={true}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Speakers</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Real voices. Honest journeys. Everything they say will land
            differently—because they've walked where you're walking.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                title={speaker.title}
                bgColor={speaker.bgColor}
                image={speaker.image}
                comingSoon={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
