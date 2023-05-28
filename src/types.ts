import { CompatibilityValue } from "./enums";

interface Player {
  name: string;
  skill: number;
}

interface Compatibility {
  playerA: Player,
  playerB: Player,
  value: CompatibilityValue
}

interface Team {
  teamId: string;
  name: string;
  playerNames: string[];
}

export type {
  Player,
  Compatibility,
  Team
}
