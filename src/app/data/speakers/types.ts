export interface Speaker {
  name: string;
  company: string;
  bio: string;
  image?: string | null;
}

export interface SpeakerGroup {
  speakers: Speaker[];
  // Number of "Coming Soon" placeholder cards shown after the speakers
  comingSoon?: number;
}

export interface SpeakerLineup {
  year: number;
  keynotes: SpeakerGroup;
  panelists: SpeakerGroup;
  speakers: SpeakerGroup;
}
