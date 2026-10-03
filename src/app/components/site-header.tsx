"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const RSVP_URL =
  "https://vabu.app/women-in-tech-summit-kenya-2026-20-edition";

// TODO: replace with your real past-event routes (or import the existing list)
const pastEvents = [
  { label: "2025 Edition", href: "/past-events/2025" },
];

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "speakers", label: "Speakers" },
  { id: "agenda", label: "Agenda" },
  { id: "tickets", label: "Tickets" },
  { id: "sponsors", label: "Sponsors" },
  { id: "organisers", label: "Organisers" },
  { id: "partners", label: "Partners" },
];

const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPastEvents = pathname?.startsWith("/past-events") ?? false;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePastOpen, setMobilePastOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobilePastOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Click outside the desktop dropdown closes it
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

  // Scroll-to-top visibility
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      setShowScrollTop(
        scrollY > 400 && scrollY + viewportHeight < fullHeight - 10,
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Active section follows the URL hash
  useEffect(() => {
    const update = () => {
      setActiveSection(window.location.hash.replace("#", "") || "home");
    };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    if (isHome) {
      window.history.pushState(null, "", "#home");
      setActiveSection("home");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // On the home page, scroll smoothly. On other pages the links fall through
  // to their `/#section` href and navigate home first.
  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (!isHome) return;

    e.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isActive = (id: string) => isHome && activeSection === id;

  return (
    <>
      <nav className="relative z-30 flex items-center justify-between p-6 md:p-8">
        <Link
          href="/"
          aria-label="Women In Tech Summit home"
          className="flex items-center space-x-2"
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-200">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/wit_logo.png"
                height={20}
                width={80}
                alt="Wit logo"
              />
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
                isActive(item.id)
                  ? "text-white border-b-2 border-purple-400 pb-1 font-medium"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Past Events dropdown (desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
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
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          RSVP
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[80%] bg-gradient-to-b from-purple-900/95 via-indigo-900/95 to-pink-900/95 border-l border-white/10 shadow-2xl pt-24 px-6 pb-8 overflow-y-auto flex flex-col space-y-2 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={isHome ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`py-3 px-4 rounded-xl text-lg transition-colors ${
                isActive(item.id)
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Past Events (mobile) */}
          <div>
            <button
              type="button"
              onClick={() => setMobilePastOpen((o) => !o)}
              aria-expanded={mobilePastOpen}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-lg transition-colors ${
                isPastEvents
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>Past Events</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobilePastOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobilePastOpen && (
              <div className="mt-1 ml-4 pl-4 border-l border-white/20 flex flex-col">
                {pastEvents.map((event) => (
                  <Link
                    key={event.href}
                    href={event.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePastOpen(false);
                    }}
                    className="py-2.5 px-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    {event.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            RSVP
          </Link>
        </div>
      </div>

      {/* Scroll to top (available on every page that uses the header) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default SiteHeader;
