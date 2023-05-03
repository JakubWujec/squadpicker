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


export type {
  Player,
  Compatibility,
}
