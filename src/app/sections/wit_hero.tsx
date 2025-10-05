"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Users, Mic, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-12">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl">
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-mono">
              {value.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-white/80 text-sm md:text-base mt-2 capitalize font-medium">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const WomenInTechSummitHero: React.FC = () => {
  const summitDate = new Date("2025-11-28T08:00:00");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    window.history.pushState(null, "", `#${sectionId}`);

    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "speakers", label: "Speakers" },
    { id: "tickets", label: "Tickets" },
    { id: "sponsors", label: "Sponsors" },
    { id: "organisers", label: "Organisers" },
    { id: "partners", label: "Partners" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero_1.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-indigo-900/80 to-pink-900/85">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-200">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-gradient-to-r from-purple-600 to-pink-600">
              <Image
                src="/wit_logo.png"
                height={20}
                width={80}
                alt="Wit logo"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-white border-b-2 border-purple-400 pb-1 font-medium"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link
          href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          RSVP
        </Link>
      </nav>

      <div
        id="home"
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center"
      >
        <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3 shadow-xl">
          <Calendar className="w-5 h-5 text-purple-300" />
          <span className="text-white/90 font-medium">
            28th - 29th Nov, 2025 • Nairobi, Kenya
          </span>
        </div>

        <h1 className="font-space-grotesk text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-6 leading-tight">
          Women In Tech Summit
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-8 font-space-grotesk">
          Kenya 2025
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light">
          A Summit Built for Changemakers Driving Tech’s Evolution.
        </p>

        {/* <h5 className="text-2xl md:text-5xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-8 font-space-grotesk">
            Elevate. Lead. Innovate.
        </h5>  */}

        <CountdownTimer targetDate={summitDate} />

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Reserve My Seat</span>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/1I825WonV8qEBd3KrFnsUQRNAejI4pXD7eOiFW12shso/preview"
            className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2"
          >
            <Mic className="w-5 h-5" />
            <span>Apply to Speak</span>
          </Link>
        </div>

        <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer group">
          <span className="text-lg font-medium">
            Let's Shape the Future of Tech Together
          </span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">
            →
          </span>
          <Link href="https://docs.google.com/forms/d/1G87aMDpsTIXKiRg9jCvbrEILdV8sVyvBgdPjATGi1Xo/preview" className="text-purple-300 underline underline-offset-4 decoration-2 decoration-purple-300">
            View Sponsor Deck
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
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
  );
};

export default WomenInTechSummitHero;
