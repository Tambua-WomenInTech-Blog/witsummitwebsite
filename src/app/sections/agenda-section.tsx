"use client";
import React, { useState, useMemo } from "react";

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface Session {
  time: string;
  title: string;
  description: string;
  tags: string[];
  speaker?: Speaker;
}

interface DaySchedule {
  day: string;
  date: string;
  sessions: Session[];
}

interface WITSummitAgendaProps {
  scheduleData?: DaySchedule[];
}

const firstDayViewMoreSessions: Session[] = [
  {
    time: "12:15 – 13:15",
    title: "Lunch & Networking",
    description: "Break for lunch and networking opportunities",
    tags: ["Break", "Networking"],
  },
  {
    time: "13:15 – 13:45",
    title: "Technical Workshop: Data & AI",
    description: "Hands-on workshop on data science and AI",
    tags: ["Workshop", "Technical", "AI"],
  },
  {
    time: "13:45 – 14:15",
    title: "Prompt Engineering for Developers & Non-Techies",
    description: "Learn effective prompt engineering techniques",
    tags: ["Workshop", "AI", "Technical"],
  },
  {
    time: "14:15 – 14:45",
    title: "Workshop –TBD",
    description: "Additional workshop session",
    tags: ["Workshop"],
  },
  {
    time: "14:45 – 15:00",
    title: "Afternoon Break",
    description: "Coffee break and networking",
    tags: ["Break"],
  },
  {
    time: "15:00 – 15:30",
    title: "Panel – Women Leading in Data & AI",
    description: "Panel discussion on women in data and AI leadership",
    tags: ["Panel", "Leadership", "AI"],
  },
  {
    time: "15:30 – 16:00",
    title: "Design Thinking for Product Innovation",
    description: "Workshop on design thinking methodologies",
    tags: ["Workshop", "Design", "Product"],
  },
  {
    time: "16:00 – 16:45",
    title: "Cybersecurity in the Age of AI & IoT",
    description: "Understanding modern cybersecurity challenges",
    tags: ["Talk", "Security", "AI"],
  },
  {
    time: "16:45 – 17:00",
    title: "Wrap-Up & Speed Networking and Closing",
    description: "Day wrap-up and networking session",
    tags: ["Closing", "Networking"],
  },
];

const secondDayViewMoreSessions: Session[] = [
  {
    time: "12:15 – 13:15",
    title: "Lunch & Networking",
    description: "Break for lunch and networking opportunities",
    tags: ["Break", "Networking"],
  },
  {
    time: "13:15 – 13:45",
    title: "Career Connect – Meet, Learn, Grow",
    description: "Career development and networking session",
    tags: ["Career", "Networking"],
  },
  {
    time: "13:45 – 14:15",
    title: "Mentor-Mentee Pairing Session",
    description: "Connect with mentors and mentees",
    tags: ["Mentorship", "Networking"],
  },
  {
    time: "14:15 – 14:45",
    title: "Talk – Building a Tech Career in Africa",
    description: "Insights on building successful tech careers in Africa",
    tags: ["Talk", "Career"],
  },
  {
    time: "14:45 – 15:00",
    title: "Afternoon Break",
    description: "Coffee break and networking",
    tags: ["Break"],
  },
  {
    time: "15:00 – 15:30",
    title: "Financial Literacy for Tech Professionals",
    description: "Financial planning and literacy for tech workers",
    tags: ["Talk", "Finance"],
  },
  {
    time: "15:30 – 16:00",
    title: "Wrap-Up & Group Reflections",
    description: "Reflect on learnings and key takeaways",
    tags: ["Closing", "Reflection"],
  },
  {
    time: "16:00 – 17:00",
    title: "Closing Ceremony & Group Photos",
    description: "Official closing and group photo session",
    tags: ["Closing", "Photos"],
  },
];

const defaultScheduleData: DaySchedule[] = [
  {
    day: "Friday",
    date: "Nov 28, 2025",
    sessions: [
      {
        time: "09:00 – 09:30",
        title: "Registration and Welcome",
        description: "Check-in and welcome coffee",
        tags: ["Welcome"],
      },
      {
        time: "09:30 – 10:00",
        title: "Opening Ceremony & Welcome",
        description: "Official opening and welcome remarks",
        tags: ["Opening"],
      },
      {
        time: "10:00 – 10:30",
        title: "Keynote: Leading With Purpose in Tech",
        description: "Inspiring keynote on purposeful leadership",
        tags: ["Keynote", "Leadership"],
      },
      {
        time: "10:30 – 10:45",
        title: "Break & Networking",
        description: "Coffee break and networking opportunity",
        tags: ["Break"],
      },
      {
        time: "10:45 – 11:15",
        title: "TechPanel: Women Founders Building for Africa",
        description: "Panel discussion with successful women founders",
        tags: ["Panel", "Entrepreneurship"],
      },
      {
        time: "11:15 – 11:45",
        title: "Talk – TBD",
        description: "Industry insights and trends",
        tags: ["Talk"],
      },
      {
        time: "11:45 – 12:15",
        title: "Panel – Products Innovation",
        description: "Innovation in product development",
        tags: ["Panel", "Product"],
      },
    ],
  },
  {
    day: "Saturday",
    date: "Nov 29, 2025",
    sessions: [
      {
        time: "09:00 – 09:30",
        title: "Opening and Welcome",
        description: "Day 2 welcome and agenda overview",
        tags: ["Welcome"],
      },
      {
        time: "09:30 – 10:00",
        title: "Keynote – TBD",
        description: "Inspiring morning keynote",
        tags: ["Keynote"],
      },
      {
        time: "10:00 – 10:30",
        title: "Panel Session – Entrepreneurship & Startups",
        description: "Expert panel on entrepreneurship and startups",
        tags: ["Panel", "Entrepreneurship"],
      },
      {
        time: "10:30 – 10:45",
        title: "Break & Networking",
        description: "Coffee break and networking",
        tags: ["Break"],
      },
      {
        time: "10:45 – 11:15",
        title: "Technical Workshop: Cloud & Dev-Ops",
        description: "Hands-on cloud and DevOps workshop",
        tags: ["Workshop", "Technical", "Cloud"],
      },
      {
        time: "11:15 – 11:45",
        title: "Technical Workshop: Quality Testing",
        description: "Workshop on software quality testing",
        tags: ["Workshop", "Technical", "Testing"],
      },
      {
        time: "11:45 – 12:15",
        title: "Fireside – Confidence & Speaking Up",
        description: "Intimate conversation on building confidence",
        tags: ["Fireside", "Career"],
      },
    ],
  },
];

const WITSummitAgenda: React.FC<WITSummitAgendaProps> = ({
  scheduleData = defaultScheduleData,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [viewMore, setViewMore] = useState<boolean>(false);

  // Calculate the sessions to display based on viewMore state
  const displayedSessions = useMemo(() => {
    const currentDaySessions = scheduleData[activeTab].sessions;

    if (!viewMore) {
      return currentDaySessions;
    }

    // Add additional sessions when viewMore is true
    if (activeTab === 0) {
      return [...currentDaySessions, ...firstDayViewMoreSessions];
    } else if (activeTab === 1) {
      return [...currentDaySessions, ...secondDayViewMoreSessions];
    }

    return currentDaySessions;
  }, [activeTab, viewMore, scheduleData]);

  // Reset viewMore when switching tabs
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setViewMore(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
            <span className="text-gray-700 font-medium">AGENDA</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What to Expect at WIT Summit
            <br />
            Kenya 2025
          </h1>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            A powerful 2-Day experience filled with keynotes, panels, intimate
            workshops, live mentoring, and plenty of good vibes. From technical
            mastery to leadership transitions to executive presence, we've
            designed sessions that honor your ambitions, not just your current
            role..
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={() => {
              const agendaText = scheduleData
                .map(
                  (day) =>
                    `${day.day}, ${day.date}\n` +
                    day.sessions
                      .map(
                        (session) =>
                          `${session.time}: ${session.title}\n${
                            session.description
                          }\nTags: ${session.tags.join(", ")}\n`
                      )
                      .join("\n")
                )
                .join("\n\n");

              const blob = new Blob([agendaText], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "WIT-Summit-Kenya-2025-Agenda.txt";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Agenda (Draft)
          </button>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-4xl">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`flex-1 py-4 text-left transition-all duration-200 ${
                  activeTab === index
                    ? "border-b-4 border-purple-800"
                    : "border-b-2 border-gray-300"
                }`}
              >
                <div className="px-6">
                  <span
                    className={`text-3xl font-bold block ${
                      activeTab === index ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {day.day}
                  </span>
                  <span
                    className={`text-lg ${
                      activeTab === index ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {day.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-800 text-white">
                  <th className="text-left py-4 px-6 font-semibold">Time</th>
                  <th className="text-left py-4 px-6 font-semibold">
                    Main Conference Room
                  </th>
                  <th className="text-left py-4 px-6 font-semibold">
                    Breakout Room
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedSessions.map((session, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-purple-50 transition-colors duration-150`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      {session.time}
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">
                          {session.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {session.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {session.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {session.speaker && (
                          <div className="flex items-center gap-3 mt-3 p-3 bg-gray-100 rounded-lg">
                            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-purple-800"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {session.speaker.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {session.speaker.title}
                                {session.speaker.company &&
                                  `, ${session.speaker.company}`}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 align-top">
                      {session.tags.includes("Break") ? (
                        <span className="text-purple-600 font-medium">
                          Break & Networking
                        </span>
                      ) : session.tags.includes("Welcome") ||
                        session.tags.includes("Opening") ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <div className="space-y-1">
                          <p className="font-medium text-sm">Workshop – TBD</p>
                          <p className="text-xs text-gray-500">
                            Details coming soon
                          </p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Time: 9:00 AM – 5:00 PM EAT</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {scheduleData[activeTab].day}:{" "}
                  {scheduleData[activeTab].day === "Friday"
                    ? "Leadership, Product & Impact"
                    : "Upskill, Career Growth & Mentorship"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4">
          <button
            onClick={() => setViewMore(!viewMore)}
            className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WITSummitAgenda;
