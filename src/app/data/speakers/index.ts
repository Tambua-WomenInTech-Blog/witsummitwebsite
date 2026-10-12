import { lineup2025 } from "./2025";
import { lineup2026 } from "./2026";
import type { SpeakerLineup } from "./types";

export type { Speaker, SpeakerGroup, SpeakerLineup } from "./types";

// To add a new edition: create `<year>.ts`, register it here and bump
// LATEST_EDITION. The previous edition stays available for /past-events/<year>.
export const speakerLineups: Record<number, SpeakerLineup> = {
  2025: lineup2025,
  2026: lineup2026,
};

export const LATEST_EDITION = 2026;
