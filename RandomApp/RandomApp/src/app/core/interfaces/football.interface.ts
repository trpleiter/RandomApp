export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: Logo[];
}

export interface Note {
  color: string;
  description: string;
  rank: number;
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value: number;
  displayValue: string;
  id: string;
  summary: string;
}

export interface IStanding {
  team: Team;
  note: Note;
  stats: Stat[];
}

export interface IFootballRootObject {
  name: string;
  abbreviation: string;
  seasonDisplay: string;
  season: number;
  standings: IStanding[];
}
