"use client";
import React from "react";
import SiteHeader from "./site-header";
import HeroFooterSection from "../sections/hero-footer";

const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
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

      <SiteHeader />

      <div className="relative z-10">{children}</div>
      <HeroFooterSection />
    </div>
  );
};

export default PageShell;
