import WITSummitAgenda from "@/app/sections/agenda-section";
import PageShell from "../../components/page-shell";
import PastEventHighlights from "../../components/past-event-highlights";
import PastSpeakers from "./components/past-speakers";
import PastSponsors2025 from "./components/past-sponsors-2025";

export const metadata = {
  title: "WITSummit 2025 | Past Events",
};

export default function PastEvent2025Page() {
  return (
    <PageShell>
      <PastEventHighlights />
      <WITSummitAgenda isPast={true} year={2025} />
      <PastSpeakers />
      <PastSponsors2025 />
    </PageShell>
  );
}
