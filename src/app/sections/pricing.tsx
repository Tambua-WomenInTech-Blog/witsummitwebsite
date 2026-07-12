import React from "react";
import { Check, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  currency: string;
  priceNote?: string;
  savingsTag?: string;
  badge?: string;
  description: string;
  callout: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  warning?: string;
}

const PricingSection: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      id: "rising-builder",
      name: "Rising Builder Pass (Student Ticket)",
      price: "2,000 / $15",
      currency: "KES",
      description:
        "For emerging builders stepping confidently into the room. Designed for students and early-career women in STEM ready to grow, connect, and explore what's possible.",
      callout: "Affordable access designed for young women in STEM.",
      features: [
        "Access to all keynotes, panels, and workshops",
        "Student-focused breakout sessions",
        "Mentorship & networking with industry professionals",
        "Free / discounted digital resources (e-books, toolkits, courses)",
      ],
      buttonText: "Grab my Ticket",
      warning: "Requirement: Valid student ID required.",
    },
    {
      id: "leadher-architect",
      name: "LeadHER Architect Pass (Regular Ticket)",
      price: "3,500 / $27",
      currency: "KES",
      badge: "Most Popular",
      popular: true,
      description:
        "For those leading, designing, and shaping systems that matter. Built for tech professionals and enthusiasts who are actively building, scaling, and influencing their fields.",
      callout: "Full access to all summit sessions & workshops for 2 days.",
      features: [
        "Full access to all summit sessions (2 days)",
        "Priority access to high-impact workshops",
        "Networking with senior professionals & peers",
        "Complimentary summit swags",
        "Access to curated networking spaces",
      ],
      buttonText: "Grab my Ticket",
    },
    {
      id: "executive-circle",
      name: "Executive Circle (4 Seats)",
      price: "12,000 / $93",
      currency: "KES",
      priceNote: "KES 3,000 per person",
      savingsTag: "Save KES 2,000 as a team",
      description:
        "For teams driving influence, decisions, and collective impact. Perfect for organizations, communities, and groups who want to experience the summit together.",
      callout: "KES 12,000 (Save KES 2,000)",
      features: [
        "4 × LeadHER Architect Passes at a discounted rate",
        "Reserved group seating (where possible)",
        "Priority access to high-impact workshops",
        "Enhanced networking opportunities as a team",
      ],
      buttonText: "Grab my Tickets",
    },
  ];

  return (
    <section id="tickets" className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border mb-8">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-700">
              REGISTRATION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            1 ticket, 2 Days.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a pass that fits your journey—whether you're just starting
            out or leading teams, there's a seat for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                tier.popular
                  ? "border-purple-400 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-purple-200"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-gray-700 tracking-wide">
                    {tier.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                    <span className="text-sm font-medium text-gray-600">
                      {tier.currency}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-purple-900">
                    {tier.price}
                  </span>
                </div>

                {tier.priceNote && (
                  <p className="text-sm text-gray-500 mb-2">{tier.priceNote}</p>
                )}

                {tier.savingsTag && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {tier.savingsTag}
                  </span>
                )}

                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>

                {tier.popular && (
                  <div className="bg-purple-200/50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-purple-800 font-medium">
                      {tier.callout}
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`p-4 rounded-lg mb-6 ${
                  tier.popular ? "bg-purple-200/30" : "bg-gray-50"
                }`}
              >
                <p className="text-sm text-gray-700 font-medium">
                  {tier.popular
                    ? "Step up, stand out, and build the career connections you've been craving."
                    : tier.callout}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        tier.popular ? "bg-purple-500" : "bg-gray-900"
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {tier.warning && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm px-3 py-2 rounded-xl mb-6">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{tier.warning}</span>
                </div>
              )}

              <Link
                href="https://vabu.app/women-in-tech-summit-kenya-2026-20-edition"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full py-4 px-6 rounded-2xl font-semibold text-lg text-center transition-all duration-300 ${
                  tier.popular
                    ? "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 shadow-md"
                    : "bg-white text-purple-600 border-2 border-purple-300 hover:bg-purple-50 hover:border-purple-400"
                }`}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All passes include access to digital resources and post-event
            content
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
