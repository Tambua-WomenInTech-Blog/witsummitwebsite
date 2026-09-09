"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "speakers", label: "Speakers" },
  { id: "tickets", label: "Tickets" },
  { id: "sponsors", label: "Sponsors" },
  { id: "organisers", label: "Organisers" },
  { id: "partners", label: "Partners" },
];

const pastEvents = [{ label: "WITSummit 2025", href: "/past-events/2025" }];

const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPastEvents = pathname?.startsWith("/past-events") ?? false;

  const [activeSection, setActiveSection] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track hash-based active section, only relevant on the homepage
  useEffect(() => {
    if (!isHome) return;

    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, [isHome]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    // If we're not on the homepage, let the Link do a real navigation to /#id
    if (!isHome) return;

    e.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-200">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Image src="/wit_logo.png" height={20} width={80} alt="Wit logo" />
          </div>
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={isHome ? `#${item.id}` : `/#${item.id}`}
            onClick={(e) => handleNavClick(item.id, e)}
            className={`transition-colors ${
              isHome && activeSection === item.id
                ? "text-white border-b-2 border-purple-400 pb-1 font-medium"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Past Events dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((open) => !open)}
            className={`flex items-center space-x-1 transition-colors ${
              isPastEvents
                ? "text-white border-b-2 border-purple-400 pb-1 font-medium"
                : "text-white/80 hover:text-white"
            }`}
          >
            <span>Past Events</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-3 min-w-[180px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden">
              {pastEvents.map((event) => (
                <Link
                  key={event.href}
                  href={event.href}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {event.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        href="https://vabu.app/women-in-tech-summit-kenya-2026-20-edition"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        RSVP
      </Link>
    </nav>
  );
};

export default SiteHeader;
