"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, pastEvents, RSVP_URL } from "./site-config";
import PromoCard from "./promo-card";

interface SiteHeaderProps {
  showPromo?: boolean;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ showPromo = true }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPastEvents = pathname?.startsWith("/past-events") ?? false;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePastOpen, setMobilePastOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobilePastOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Click outside the desktop dropdown closes it; Escape closes everything
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Scroll state: pill gets denser once the page scrolls; scroll-to-top visibility
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      setScrolled(scrollY > 16);
      setShowScrollTop(scrollY > 400 && scrollY + viewportHeight < fullHeight - 10);
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
      {/* Dim the page behind the mobile menu */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <header className="fixed top-3 md:top-4 inset-x-3 md:inset-x-4 z-50">
        <nav
          aria-label="Main"
          className={`mx-auto max-w-6xl flex items-center justify-between rounded-full border backdrop-blur-xl px-3 py-2 md:pl-4 md:pr-3 transition-colors duration-300 ${
            scrolled
              ? "bg-indigo-950/85 border-white/20 shadow-2xl"
              : "bg-indigo-950/50 border-white/15 shadow-xl"
          }`}
        >
          <Link
            href="/"
            aria-label="Women In Tech Summit home"
            className="flex items-center"
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

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base">
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
                <div className="absolute top-full right-0 mt-6 min-w-[180px] bg-indigo-950/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
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
            className="hidden lg:inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            RSVP
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white shadow-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu: drops down from the pill */}
        <div
          className={`lg:hidden mx-auto max-w-6xl mt-3 origin-top rounded-3xl border border-white/15 bg-indigo-950/90 backdrop-blur-xl shadow-2xl overflow-y-auto transition-all duration-300 motion-reduce:transition-none ${
            mobileMenuOpen
              ? "opacity-100 scale-100 max-h-[calc(100dvh-6.5rem)]"
              : "opacity-0 scale-95 max-h-0 invisible border-transparent"
          }`}
        >
          <div className="p-3 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={isHome ? `#${item.id}` : `/#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`py-3 px-4 rounded-2xl text-lg transition-colors ${
                  isActive(item.id)
                    ? "bg-white/15 text-white font-semibold"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div>
              <button
                type="button"
                onClick={() => setMobilePastOpen((o) => !o)}
                aria-expanded={mobilePastOpen}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-2xl text-lg transition-colors ${
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
              className="mt-2 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              RSVP
            </Link>
          </div>
        </div>
      </header>

      {showPromo && <PromoCard />}

      {/* Scroll to top (available on every page that uses the header) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform ${
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