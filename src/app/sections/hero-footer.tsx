import React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const HeroFooterSection: React.FC = () => {
  return (
    <section
      className="relative flex pb-24 flex-col justify-between bg-gray-900 overflow-hidden"
      style={{ height: "684px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/80"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-8 tracking-wide">
            The Summit We've All Been Waiting For.
          </h2>

          <div className="space-y-4 mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-purple-400">One</span>{" "}
              <span className="text-white">space.</span>{" "}
              <span className="text-purple-400">One</span>{" "}
              <span className="text-white">voice.</span>
            </h1>

            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-purple-400">One</span>{" "}
              <span className="text-white">mission</span>
              <span className="text-white">...</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8 max-w-3xl mx-auto">
            to rise beyond limits.
          </p>

          <Link
            href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Reserve My Seat
          </Link>

          <p className="text-white/70 text-sm mt-8">
            Powered by{" "}
            <Link
              href="https://womenintechblog.dev/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              tambua.women.in.Tech
            </Link>
          </p>
        </div>
      </div>

      <footer className="pb-24 relative z-10 flex flex-col sm:flex-row justify-between items-center px-6 md:px-8 lg:px-12 py-6 border-t border-white/10">
        <div className="text-white/70 text-sm mb-4 sm:mb-0">
          © Women In Tech Summit KE 2025 — Copyright
        </div>

        <div className="flex space-x-4">
          <a
            href="https://x.com/w_techshoutouts"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/women-in-tech-shoutouts/"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@womenintechshoutouts"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="TikTok"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.instagram.com/w_techshoutouts/?"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default HeroFooterSection;
