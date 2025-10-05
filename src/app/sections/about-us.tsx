"use client";
import React, { useState, useEffect } from "react";
import { Info, Users, Calendar, Building } from "lucide-react";
import Link from "next/link";

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number.replace(/\D/g, ""));

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetNumber / 50;
      let current = 0;
      const counter = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetNumber, delay]);

  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
        {count === targetNumber ? number : `${count}+`}
      </div>
      <div className="text-lg md:text-xl text-white/70 font-medium">
        {label}
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const stats = [
    {
      number: "150+",
      label: "Expected Attendees",
      icon: <Users className="w-8 h-8 text-purple-300" />,
    },
    {
      number: "2",
      label: "Days",
      icon: <Calendar className="w-8 h-8 text-purple-300" />,
    },

    {
      number: "30+",
      label: "Communities",
      icon: <Building className="w-8 h-8 text-purple-300" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-tl from-black/60 to-transparent"></div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-purple-400/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-xl">
            <Info className="w-5 h-5 text-purple-300" />
            <span className="text-white font-semibold text-sm uppercase tracking-wide">
              About WIT Summit Kenya
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto">
            Who We Are & Why We Care
          </h1>

          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Over the past 4 years,
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Tambua Women in Tech
              </strong>{" "}
              has amplified voices globally — celebrating 350+ women across
              Africa, Europe, and the Americas through shoutouts and
              storytelling. And building onto this initiative, we are hosting
              our 1st ever Women In Tech summit to bring together these voices
              in one space.
            </p>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Anchored in career growth, the Women in Tech Summit Kenya 2025
              champions this year's theme{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                "Beyond Limits: Elevate. Lead. Innovate."
              </strong>{" "}
              calling every woman in tech to rise boldly. We're creating a space
              where ambition meets opportunity, where stories turn into
              strategy, and where women across Kenya and beyond unite to shape
              the future of technology together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Grab my Ticket
            </Link>

            <Link
              href="https://docs.google.com/forms/d/1I825WonV8qEBd3KrFnsUQRNAejI4pXD7eOiFW12shso/preview"
              className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Apply to Speak
            </Link>
          </div>

          <div className="mb-16">
            <a
              href="#partner"
              className="text-white/80 hover:text-white text-lg font-medium underline underline-offset-4 decoration-2 decoration-purple-300 hover:decoration-pink-300 transition-colors"
            >
              Become a Partner
            </a>
          </div>

          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
