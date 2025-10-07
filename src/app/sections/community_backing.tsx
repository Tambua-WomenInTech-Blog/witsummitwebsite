"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const CommunityBacking: React.FC = () => {
  const communities = [
    { src: "/sponsors/platcorp.png", alt: "platcorp", height: 90, width: 150 },
    { src: "/sponsors/vabu.png", alt: "vabu", height: 80, width: 100 },
    { src: "/sponsors/lamu.png", alt: "lamu", height: 80, width: 150 },
     { src: "/sponsors/luxpng.png", alt: "lux", height: 80, width: 150 },
    { src: "/sponsors/ihub.png", alt: "ihub", height: 80, width: 150 },
    { src: "/sponsors/kdk.png", alt: "kdk", height: 80, width: 150 },
    { src: "/sponsors/tech_event_kenya.png", alt: "k_tech_event", height: 80, width: 100 },
    {
      src: "/sponsors/wtn.png",
      alt: "womentechNetwork",
      height: 80,
      width: 150,
    },

    { src: "/sponsors/ttw.png", alt: "ttw", height: 90, width: 100 },
    { src: "/sponsors/awit.png", alt: "awit", height: 80, width: 150 },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll-right-to-left 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        id="sponsors"
        className="relative py-12 px-6 md:px-8 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-900 to-pink-800">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#721544",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mb-16 mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <Sparkles className="w-8 h-8 text-pink-300 animate-pulse" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                <Sparkles className="w-8 h-8 text-purple-300 animate-pulse delay-500" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Backed by the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 animate-pulse">
                Communities that Move Us
              </span>
            </h1>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 font-light">
                This summit isn't just powered by ideas—it's driven by
                collective action. From local networks to global movements,
                these organizations are championing the next generation of
                African women in tech. They've invested, advocated, and
                committed to something transformative. Because when we unite our
                voices, we amplify our impact.
              </p>

              <p className="text-xl md:text-2xl text-white/90 font-light">
                Because when one of us shows up, we all rise.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative overflow-hidden mb-16">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#721544] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#721544] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            <div className="flex items-center flex-shrink-0">
              {communities.map((community, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-shrink-0"
                >
                  <Image
                    src={community.src}
                    alt={community.alt}
                    height={community.height}
                    width={community.width}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert max-w-[80px] sm:max-w-[120px] md:max-w-none h-auto"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center flex-shrink-0">
              {communities.map((community, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-shrink-0"
                >
                  <Image
                    src={community.src}
                    alt={community.alt}
                    height={community.height * 0.7}
                    width={community.width * 0.7}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert max-w-[80px] sm:max-w-[120px] md:max-w-none h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityBacking;
