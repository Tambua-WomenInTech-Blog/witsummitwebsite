import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  currency: string;
  badge?: string;
  description: string;
  callout: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  highlight?: string;
}

const PricingSection: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      id: "starter",
      name: "Rising Star Pass (Student Ticket)",
      price: "1,500 / $12",
      currency: "KES",
      description: "Accessible entry for students & future leaders.",
      callout: "Affordable access designed for young women in STEM.",
      features: [
        "Access to all keynotes, panels, and workshops",
        "Student-only breakout sessions",
        "Exclusive mentorship & networking with industry leaders",
        "Free/discounted digital resources (e.g., e-books, toolkits, online courses)",
      ],
      buttonText: "Grab my Ticket",
      highlight: "👍 Requirement: Provide valid students' IDs.",
    },

    {
      id: "empowerher",
      name: "EmpowerHER Pass (Regular Ticket)",
      price: "3000 / $24",
      currency: "KES",
      popular: true,
      badge: "Most Popular",
      description:
        "Standard all-access pass for professionals, entrepreneurs, and tech enthusiasts.",
      callout: "Full access to all summit sessions & workshops for 2 days.",
      features: [
        "Full access to all summit sessions & workshops for 2 days",
        "Networking with professionals & peers",
        "Complimentary summit swags",
      ],
      buttonText: "Grab my Ticket",
      highlight: "🌟 Perfect for professionals and tech enthusiasts.",
    },

    {
      id: "power-circle",
      name: "Power Circle Pass (5 Tickets)",
      price: "12,000 / $93",
      currency: "KES",

      description:
        "Perfect for teams, companies, and organizations bringing 5 people.",
      callout: "KES 12,000 (Save KES 3,000)",
      features: [
        "5 Change Maker Passes (standard tickets) at a discounted rate",
        "Reserved group seating (where possible)",
        "Optional recognition as a Community Supporter",
        "Affordable for companies and communities to participate",
      ],
      buttonText: "Grab my Tickets",
      highlight: "🎉 Ideal for groups and organizations.",
    },
  ];

  const handleButtonClick = () => {
    window.open(
      "https://vabu.app/women-in-tech-summit-kenya-2025-11",
      "_blank"
    );
  };

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

                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-purple-900">
                    {tier.price}
                  </span>
                </div>

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

              {tier.highlight && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-medium">
                    {tier.highlight}
                  </p>
                </div>
              )}

              <Link
                href="https://vabu.app/women-in-tech-summit-kenya-2025-11"
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
