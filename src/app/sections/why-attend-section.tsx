import React from "react";
import { MapPin, Mic, Users, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div
      className="group bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 border-purple-100 hover:border-purple-200"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 rounded-xl w-fit">
        <div className="text-black">{icon}</div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
    </div>
  );
};

const WhyAttendSection: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "A Stage for You",
      description:
        "Whether you're attending or speaking, you belong on this stage. Your presence shapes the future.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real Connections",
      description:
        "Meet industry leaders, future collaborators, and ambitious professionals, where meaningful relationships spark real opportunities.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Growth",
      description:
        "Workshops, panels, and sessions designed to level up your skills, strengthen your presence, and accelerate your trajectory.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Mentorship Access",
      description:
        "Learn directly from industry pioneers and rising stars. Ask questions, get advice, and gain insights from experts across all tech domains.",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-8 lg:px-12 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

        {/* Decorative dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 border border-purple-200">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
                Why Attend?
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Every talk, every connection, every session, every moment is
              designed to accelerate your journey in tech.
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Whether you're scaling new heights, pioneering solutions, or
              charting your path, this summit will equip you with the tools,
              networks, and confidence to create the impact you envision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Link
                href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Grab my Ticket
              </Link>

              <Link
                href="https://docs.google.com/forms/d/1I825WonV8qEBd3KrFnsUQRNAejI4pXD7eOiFW12shso/preview"
                className="bg-transparent border-2 border-purple-600 hover:border-purple-700 text-purple-600 hover:text-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply to Speak
              </Link>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          {/* <div className="relative">
       
            <div className="relative h-[600px] w-full">
             
              <div className="absolute top-0 right-0 w-64 h-40 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">Tech Leaders</span>
                  </div>
                </div>
              </div>

              
              <div className="absolute top-32 left-0 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Mic className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">Speaking</span>
                  </div>
                </div>
              </div>

           
              <div className="absolute bottom-32 right-8 w-56 h-44 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Briefcase className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">Networking</span>
                  </div>
                </div>
              </div>

             
              <div className="absolute bottom-0 left-16 w-52 h-36 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">Learning</span>
                  </div>
                </div>
              </div>

            
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-200">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center  border-gradient-to-r from-purple-600 to-pink-600">
                    <Image
                      src="/wit_logo.png"
                      height={40}
                      width={80}
                      alt="Wit logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
