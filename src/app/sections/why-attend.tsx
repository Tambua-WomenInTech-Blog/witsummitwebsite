import Link from "next/link";

export default function WhyAttend() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "A Stage for You",
      description:
        "Whether you're attending or speaking, you belong on this stage. Your presence shapes the future.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Real Connections",
      description:
        "Meet industry leaders, future collaborators, and ambitious professionals, where meaningful relationships spark real opportunities",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM6 8H4v6h12V8H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Career Growth",
      description:
        "Workshops, panels, and sessions designed to level up your skills, strengthen your presence, and accelerate your trajectory",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Mentorship Access",
      description:
        "Learn directly from industry pioneers and rising stars. Ask questions, get advice, and gain insights from experts across all tech domains.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600 font-medium">WHY ATTEND?</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Finally, a Tech Summit Where You Don't Have to Prove You Belong.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Every talk, every connection, every session, every moment is
              designed to accelerate your journey in tech. Whether you're
              scaling new heights, pioneering solutions, or charting your path,
              this summit will equip you with the tools, networks, and
              confidence to create the impact you envision.
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/api/placeholder/400/500"
                alt="Woman speaking at tech conference"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Don't miss this opportunity to connect, grow, and lead alongside
              incredible women in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                Get Your Ticket Now
              </button>
              <Link
                href="https://docs.google.com/forms/d/1I825WonV8qEBd3KrFnsUQRNAejI4pXD7eOiFW12shso/preview"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                Apply to Speak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
