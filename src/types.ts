import { CompatibilityValue } from "./enums";

interface Player {
  id: number;
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
