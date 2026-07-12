import React from "react";
import PastAgendaTable, {
  DaySchedule,
} from "../past-events/2025/components/past-agenda-table";

interface WITSummitAgendaProps {
  scheduleData?: DaySchedule[];
  isPast?: boolean;
  year?: number | string;
}

const WITSummitAgenda: React.FC<WITSummitAgendaProps> = ({
  scheduleData,
  isPast = false,
  year,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
            <span className="text-gray-700 font-medium">AGENDA</span>
          </div>

          {isPast ? (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              #WIT Summit Experience {year}
            </h1>
          ) : (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What to Expect at WIT Summit
              <br />
              Kenya 2026
            </h1>
          )}

          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            A powerful 2-Day experience filled with keynotes, panels, intimate
            workshops, live mentoring, and plenty of good vibes. From technical
            mastery to leadership transitions to executive presence, we've
            designed sessions that honor your ambitions, not just your current
            role.
          </p>
        </div>

        <PastAgendaTable scheduleData={scheduleData} />
      </div>
    </div>
  );
};

export default WITSummitAgenda;
