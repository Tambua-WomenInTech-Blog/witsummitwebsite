import SpeakersSection from "./speaker-selection";
import { LATEST_EDITION, speakerLineups } from "@/app/data/speakers";

const LatestSpeakersSection = () => (
  <SpeakersSection lineup={speakerLineups[LATEST_EDITION]} />
);

export default LatestSpeakersSection;
