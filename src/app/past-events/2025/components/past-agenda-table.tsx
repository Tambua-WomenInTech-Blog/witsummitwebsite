"use client";
import React, { useMemo, useState } from "react";

export interface BreakoutSession {
  title: string;
  speaker?: string;
}

export interface Session {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  tags: string[];
  breakout?: BreakoutSession;
}

export interface DaySchedule {
  day: string;
  date: string;
  theme: string;
  sessions: Session[];
}

const VIEW_MORE_CUTOFF = "12:30";
const TIMEZONE_LABEL = "EAT";
const DOWNLOAD_FILENAME = "WIT-Summit-Kenya-2026-Agenda.txt";
const NO_BREAKOUT_TAGS = ["Break", "Welcome", "Opening", "Networking"];

export const defaultScheduleData: DaySchedule[] = [
  {
    day: "Friday",
    date: "Nov 27, 2026",
    theme: "Leadership, Product & Impact",
    sessions: [
      {
        time: "08:00 – 09:00",
        title: "Registration & Check-in",
        description: "Check-in and welcome",
        tags: ["Welcome"],
      },
      {
        time: "09:00 – 09:30",
        title: "Opening Ceremony - Ihub representative",
        speaker: "Allan Mwangi",
        tags: ["Opening"],
      },
      {
        time: "09:30 – 10:00",
        title: "Opening keynote - We made it here, Now lets talk about money",
        speaker: "Maureen Josephine",
        tags: ["Keynote", "Leadership"],
      },
      {
        time: "10:00 – 11:00",
        title: "Panel: Executive & Boardroom Track",
        tags: ["Panel", "Executive", "Boardroom"],
      },
      {
        time: "11:00 – 11:30",
        title: "Break & Networking",
        tags: ["Break"],
      },
      {
        time: "11:30 – 12:15",
        title: "The Surreal Pivot: Navigating a Career I Never Planned",
        speaker: "Brenda Mwaura",
        tags: ["Career", "Governance", "Legal Tech"],
        breakout: {
          title: "Governance – Legal & Regulatory Fundamentals & Framework",
          speaker: "Julie Ojwaya",
        },
      },
      {
        time: "12:20 – 13:15",
        title:
          "Beyond Technical Expertise: Building Influence in the Boardroom and Shaping Technology Decisions",
        speaker: "Mercy Chore",
        tags: ["Leadership", "Boardroom", "AI", "Privacy"],
        breakout: {
          title:
            "The Human in the Loop: Designing AI Systems That Respect Privacy and Earn Trust",
          speaker: "Tabitha Margaret",
        },
      },
      {
        time: "13:20 – 14:20",
        title: "Lunch Break & Group Photos",
        tags: ["Break"],
      },
      {
        time: "14:20 – 15:00",
        title: "Kopo Kopo Sponsor-Led APIs brief",
        speaker: "Sponsor-Led session (Kopo Kopo) - Doreen Chemweno",
        tags: ["Finance", "Career", "Growth"],
        breakout: {
          title:
            "The Design of Wealth: A Financial Blueprint for Kenya's Creative Tech Professionals",
          speaker: "Kyendereta Chantelle",
        },
      },
      {
        time: "15:15 – 16:00",
        title:
          "The Habits Holding Her Back: Unlearning the Rules That Got You Here",
        speaker: "Tabitha Kavyu",
        tags: ["Leadership", "Growth"],
      },
      {
        time: "16:00 – 16:45",
        title: "Wellness Activity Session: Pause. Breathe. Reconnect.",
        tags: ["Wellness", "Mental Health"],
      },
      {
        time: "16:45 – 17:45",
        title: "Community Mixer",
        description: "Evening networking for all attendees",
        tags: ["Networking", "Community"],
      },
      {
        time: "17:45 – 18:00",
        title: "Closing Ceremony & Group Photos",
        description: "Closing and thank-you notes",
        tags: ["Closing"],
      },
    ],
  },
  {
    day: "Saturday",
    date: "Nov 28, 2026",
    theme: "Upskill, Career Growth & Mentorship",
    sessions: [
      {
        time: "08:00 – 09:00",
        title: "Registration & Check-in",
        description: "Check-in and welcome",
        tags: ["Welcome"],
      },
      {
        time: "09:00 – 09:30",
        title: "Opening Remarks",
        speaker: "Maureen Josephine",
        tags: ["Opening"],
      },
      {
        time: "09:30 – 10:00",
        title: "Opening Keynote",
        speaker: "Allela Eunice",
        tags: ["Keynote"],
      },
      {
        time: "10:00 – 11:00",
        title: "Panel: Building in the AI Era",
        description:
          "Technical panel with Africa's Talking, Loop, Kopo Kopo & GIZ",
        tags: ["Panel", "AI", "Industry"],
      },
      {
        time: "11:00 – 11:30",
        title: "Break & Networking",
        tags: ["Break"],
      },
      {
        time: "11:30 – 12:15",
        title: "From Idea to Impact: Product Innovation for Communities",
        speaker: "Christal Riziki",
        tags: ["Product Innovation", "Leadership", "Boardroom"],
        breakout: {
          title: "Leadership – Transitioning Into Board Roles",
          speaker: "Depha Anns Okal",
        },
      },
      {
        time: "12:20 – 13:15",
        title:
          "From Prototype to Production: Building Autonomous Multi-Agent Systems for Africa's Fintech Ecosystem",
        speaker: "Beth Njeri",
        tags: ["AI", "Agents", "Fintech", "SMEs", "Retail"],
        breakout: {
          title:
            "AI for the Duka: Building Affordable Demand Intelligence for Kenya's 900,000+ Retail SMEs",
          speaker: "Abigael Mukuru Zawadi",
        },
      },
      {
        time: "13:15 – 14:20",
        title: "Lunch Break & Group Photos",
        tags: ["Break"],
      },
      {
        time: "14:20 – 15:05",
        title: "From Finance to Production Systems",
        speaker: "Lydiah Ng'ang'a",
        tags: ["Software Engineering", "Security", "AI"],
        breakout: {
          title:
            "Building Secure Software in the Age of AI: Protecting Your Projects from Supply Chain Attacks",
          speaker: "Blossom Dugbatey",
        },
      },
      {
        time: "15:05 – 15:50",
        title:
          "Building Production-Ready RAG Apps: Deploying Angular & Gemini AI on Firebase",
        speaker: "Morara Millicent",
        tags: ["AI", "RAG", "Gemini AI", "Software Engineering"],
        breakout: {
          title:
            "Your Data Never Has to Leave the Building: Building Production AI Systems Without the Cloud",
          speaker: "Alfonce Micah Yano",
        },
      },
      {
        time: "15:50 – 16:30",
        title: "Panel: Mentorship & Career Growth",
        tags: ["Panel", "Mentorship", "Growth"],
      },
      {
        time: "16:30 – 17:45",
        title: "Speed Mentorship & Recruitment",
        speaker: "Allela Eunice & speed recruitment partners",
        tags: ["Mentorship", "Careers", "Networking"],
      },
      {
        time: "17:45 – 18:00",
        title: "Closing Ceremony & Group Photos",
        description: "Closing and thank-you notes",
        tags: ["Closing"],
      },
    ],
  },
];

const startTime = (time: string) => time.split("–")[0].trim();
const endTime = (time: string) => time.split("–").pop()!.trim();

/** "13:30" -> "1:30 PM" */
const to12h = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
};

const dayTimeRange = (day: DaySchedule) => {
  if (!day.sessions.length) return "";
  const first = startTime(day.sessions[0].time);
  const last = endTime(day.sessions[day.sessions.length - 1].time);
  return `${to12h(first)} – ${to12h(last)} ${TIMEZONE_LABEL}`;
};

const hasNoBreakout = (session: Session) =>
  session.tags.some((tag) => NO_BREAKOUT_TAGS.includes(tag));

const buildAgendaText = (days: DaySchedule[]) =>
  days
    .map((day) => {
      const header = `${day.day}, ${day.date} — ${day.theme}`;
      const sessions = day.sessions.map((s) => {
        const lines = [`${s.time}  ${s.title}`];
        if (s.speaker) lines.push(`  Speaker: ${s.speaker}`);
        if (s.description) lines.push(`  ${s.description}`);
        if (s.breakout) {
          lines.push(
            `  Breakout: ${s.breakout.title}${
              s.breakout.speaker ? ` — ${s.breakout.speaker}` : ""
            }`,
          );
        }
        return lines.join("\n");
      });
      return [header, ...sessions].join("\n\n");
    })
    .join("\n\n\n");

const downloadText = (text: string, filename: string) => {
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">
    {label}
  </span>
);

const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
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
);

const SessionRow: React.FC<{ session: Session; striped: boolean }> = ({
  session,
  striped,
}) => (
  <tr
    className={`border-b border-gray-200 ${
      striped ? "bg-gray-50" : "bg-white"
    } hover:bg-purple-50 transition-colors duration-150`}
  >
    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap align-top">
      {session.time}
    </td>

    <td className="py-4 px-6 align-top">
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">{session.title}</h4>
        {session.speaker && (
          <p className="text-xs text-purple-800 font-medium">
            {session.speaker}
          </p>
        )}
        {session.description && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {session.description}
          </p>
        )}
        <div className="flex flex-wrap gap-1">
          {session.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </td>

    <td className="py-4 px-6 text-gray-600 align-top">
      {session.breakout ? (
        <div className="space-y-2">
          <p className="font-semibold text-gray-900 text-sm">
            {session.breakout.title}
          </p>
          {session.breakout.speaker && (
            <p className="text-xs text-purple-800 font-medium">
              {session.breakout.speaker}
            </p>
          )}
        </div>
      ) : (
        <span className="text-gray-400" aria-label="No breakout session">
          {hasNoBreakout(session) ? "—" : "–"}
        </span>
      )}
    </td>
  </tr>
);

interface AgendaTableProps {
  scheduleData?: DaySchedule[];
}

const PastAgendaTable: React.FC<AgendaTableProps> = ({
  scheduleData = defaultScheduleData,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  const activeDay = scheduleData[activeTab];

  const { visibleSessions, hiddenCount } = useMemo(() => {
    const all = activeDay?.sessions ?? [];
    // "HH:MM" strings compare correctly as plain strings
    const morning = all.filter((s) => startTime(s.time) < VIEW_MORE_CUTOFF);
    return {
      visibleSessions: viewMore ? all : morning,
      hiddenCount: all.length - morning.length,
    };
  }, [activeDay, viewMore]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setViewMore(false);
  };

  if (!activeDay) return null;

  return (
    <>
      <div className="flex justify-center mb-12">
        <button
          type="button"
          onClick={() =>
            downloadText(buildAgendaText(scheduleData), DOWNLOAD_FILENAME)
          }
          className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <DownloadIcon />
          Download Agenda
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <div
          role="tablist"
          aria-label="Summit days"
          className="flex w-full max-w-4xl"
        >
          {scheduleData.map((day, index) => {
            const selected = activeTab === index;
            return (
              <button
                key={day.day}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => handleTabChange(index)}
                className={`flex-1 py-4 text-left transition-all duration-200 ${
                  selected
                    ? "border-b-4 border-purple-800"
                    : "border-b-2 border-gray-300"
                }`}
              >
                <div className="px-6">
                  <span
                    className={`text-3xl font-bold block ${
                      selected ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {day.day}
                  </span>
                  <span
                    className={`text-lg ${
                      selected ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {day.date}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-800 text-white">
                <th scope="col" className="text-left py-4 px-6 font-semibold">
                  Time
                </th>
                <th scope="col" className="text-left py-4 px-6 font-semibold">
                  Main Conference Room
                </th>
                <th scope="col" className="text-left py-4 px-6 font-semibold">
                  Breakout Room
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleSessions.map((session, index) => (
                <SessionRow
                  key={`${activeDay.day}-${session.time}`}
                  session={session}
                  striped={index % 2 === 0}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span>Time: {dayTimeRange(activeDay)}</span>
            </div>
            <div className="flex items-center gap-2">
              <PinIcon />
              <span>
                {activeDay.day}: {activeDay.theme}
              </span>
            </div>
          </div>
        </div>
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-center py-4">
          <button
            type="button"
            aria-expanded={viewMore}
            onClick={() => setViewMore((v) => !v)}
            className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {viewMore ? "View Less" : `View More (${hiddenCount})`}
          </button>
        </div>
      )}
    </>
  );
};

export default PastAgendaTable;
