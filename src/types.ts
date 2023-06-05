import { CompatibilityValue } from "./enums";

interface Player {
  name: string;
  skill: number;
}

type Players = {
  [key: string]: Player
}

interface Compatibility {
  playerA: Player,
  playerB: Player,
  value: CompatibilityValue
}

type Teams = {
  [key: string]: Team;
}
interface Team {
  teamId: Extract<keyof Teams, string>;
  name: string;
  playerNames: string[];
}


export type {
  Players,
  Player,
  Compatibility,
  Team,
  Teams
}
