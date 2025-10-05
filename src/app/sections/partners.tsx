"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Partners: React.FC = () => {
  const partners = [
    { src: "/sponsors/platcorp.png", alt: "platcorp", height: 90, width: 150 },
    { src: "/sponsors/vabu.png", alt: "vabu", height: 80, width: 100 },
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
        id="partners"
        className="relative py-12 px-6 md:px-8 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-950 to-violet-950">
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-950/40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <Sparkles className="w-8 h-8 text-pink-300 animate-pulse" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                <Sparkles className="w-8 h-8 text-purple-300 animate-pulse" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Partner With Us <br />
            </h1>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 font-light">
                We're seeking visionary partners who understand that investing
                in women in tech means investing in innovation itself.
                Sponsoring WIT Summit Kenya 2025 goes beyond brand exposure—it's
                about shaping the future of African technology leadership. Let's
                build something bold, together.
              </p>
            </div>

            <div className="text-center max-w-6xl mx-auto mb-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:womentechsummitke@gmail.com")
                  }
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Talk to Our Team</span>
                </button>

                <Link
                  href="https://docs.google.com/forms/d/1G87aMDpsTIXKiRg9jCvbrEILdV8sVyvBgdPjATGi1Xo/preview"
                  className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
                >
                  <span>View Sponsorship Deck</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative overflow-hidden mb-16 max-w-5xl mx-auto">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-purple-1000 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-1000 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            <div className="flex items-center flex-shrink-0">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center mx-2 md:mx-6 lg:mx-10 flex-shrink-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    height={partner.height}
                    width={partner.width}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center flex-shrink-0">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    height={partner.height}
                    width={partner.width}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
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

export default Partners;
