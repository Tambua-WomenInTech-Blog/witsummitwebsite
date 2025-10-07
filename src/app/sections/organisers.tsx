"use client";
import React, { useState, useEffect } from "react";
import { SpeakerCard } from "./speaker-selection";

interface Organizer {
  name: string;
  title: string;

  image: string;
  isBlackAndWhite?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface WomenMakingItHappenProps {
  organizers?: Organizer[];
  testimonials?: Testimonial[];
}

const defaultOrganizers: Organizer[] = [
  {
    name: "Maureen Josephine",
    title: "WIT Summit Host | Founder Tambua | Software Engineer | GDE",
    image: "/speakers/mj.png",
  },
  {
    name: "Chantelle Kyendereta",
    title: "Founder, CEO & Product Designer Kenyan Design Konversations ",
    image: "/speakers/kyendereta.jpg",
  },
  {
    name: "Hannah Olukoye",
    title: "Google Developer Expert | Engineering Manager ",
    image: "/speakers/Hannah.jpg",
  },

  {
    name: "Kendi J",
    title: "Software Engineer | Tech Speaker | Data Scientist",
    image: "/speakers/kendi.jpeg",
  },
  {
    name: "Ijeoma Ella Ogbonna",
    title: "Mobile | Game developer | Marketing | WTM Ambassador  ",
    image: "/speakers/ellah.png",
  },
  {
    name: "Atieno Allela",
    title: "Co-Founder - Mentor Match Kenya | GHC Scholar",
    image: "/speakers/allela.png",
  },

  {
    name: "Tabitha Kavyuu",
    title: "Senior Community Manager - AltSchool Africa",

    image: "/speakers/tabitha.jpg",
  },
  {
    name: "Cynthia Kamau",
    title: "Software Developer | Co-Founder Africa Vibe Coders",

    image: "/speakers/cynthia.png",
  },
  {
    name: "Lina Mwakitawa",
    title: "Flutteristas Mombasa Lead | Community Partnership lead",
    image: "/speakers/lina.png",
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "This summit is a long time coming. We deserve a space that reflects our brilliance.",
    author: "Lilian N.",
    role: "Speaker",
  },
  {
    quote:
      "We've moved beyond seeking space to creating the landscape. The future is NOW",
    author: "Maureen Josephine",
    role: "Summit Host",
  },
  {
    quote:
      "It's more than a tech event. It's a love letter to every woman who ever doubted she belonged in tech.",
    author: "Kyendereta",
    role: "Organizing Committee",
  },
];

const WomenMakingItHappen: React.FC<WomenMakingItHappenProps> = ({
  organizers = defaultOrganizers,
  testimonials = defaultTestimonials,
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="organisers" className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold">ORGANISERS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            From the Women Making It
            <br />
            Happen
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            WIT Summit Kenya 2025 may be our first edition, but the impact is
            already unfolding. Meet the changemakers, thought leaders, and
            visionaries who are driving this movement forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {organizers.map((organizer, index) => (
            <SpeakerCard
              key={index}
              name={organizer.name}
              title={organizer.title}
              image={organizer.image}
              bgColor="bg-black"
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border-2 border-dashed transition-all duration-500 ${
                index === currentTestimonial
                  ? "border-purple-400 bg-purple-50"
                  : "border-gray-200 bg-gray-50"
              } ${index === currentTestimonial ? "opacity-100" : "opacity-60"}`}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>

              <blockquote className="text-lg text-gray-800 mb-6 text-center leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="text-center">
                <p className="font-bold text-gray-900 mb-1">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenMakingItHappen;
