import React from "react";
import { Sparkles, ArrowRight, Users } from "lucide-react";

const EmpowermentSection: React.FC = () => {
  return (
    <section className="relative py-12 px-6 md:px-8 lg:px-12 overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-pink-300 animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              <Sparkles className="w-8 h-8 text-purple-300 animate-pulse delay-500" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
            The tech industry is evolving?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 animate-pulse">
              Are you ready to lead the change.
            </span>
          </h1>

          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 font-light">
              WIT Summit Kenya 2025 is your catalyst for career transformation.
            </p>

            <p className="text-xl md:text-2xl text-white/90 font-light">
              Where Women in Tech come to elevate their expertise, build powerful networks, 
              and create the impact they're meant to make for themselves, their communities, and the future of African innovation.
            </p>

            <p className="text-xl md:text-2xl text-white/90 font-light">
              Connect with trailblazers. Learn from innovators. Accelerate your growth.
              Because when we rise together, we transform entire industries.
            </p>
          </div>

          <div className="flex justify-center mt-16">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
