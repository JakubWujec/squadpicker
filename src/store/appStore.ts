import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Compatibility, Player, Team } from '../types';


interface AppState {
  players: Player[];
  compatibilities: Compatibility[];
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  addPlayer: (player: Player) => void;
  removePlayer: (playerName: string) => void;
  addCompatibility: (newCompatibility: Compatibility) => void;
  removeCompatibility: (compatibility: Compatibility) => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      players: [],
      compatibilities: [],
      teams: [
        {
          teamId: "1",
          name: "Team 1",
          playerNames: []
        },
        {
          teamId: "2",
          name: "Team 2",
          playerNames: []
        }
      ],
      setTeams: (teams: Team[]) =>
        set(({ teams: teams })),
      addPlayer: (player: Player) =>
        set(store => ({ players: [...store.players, player] })),
      removePlayer: (playerName: string) =>
        set(store => ({ players: store.players.filter(p => p.name != playerName) })),
      addCompatibility: (newCompatibility: Compatibility) =>
        set(store => ({ compatibilities: [...store.compatibilities.filter(comp => isCompatibilityBetweenPlayers(comp, newCompatibility.playerA, newCompatibility.playerB)), newCompatibility] })),
      removeCompatibility: (compatibility: Compatibility) =>
        set(store => ({ compatibilities: store.compatibilities.filter(comp => isCompatibilityBetweenPlayers(comp, compatibility.playerA, compatibility.playerB)) })),

    }),
    {
      name: 'zustand-squad',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

const isCompatibilityBetweenPlayers = (compatibility: Compatibility, playerA: Player, playerB: Player) => {
  const playerNames = [playerA.name, playerB.name]
  return !(playerNames.includes(compatibility.playerA.name) && playerNames.includes(compatibility.playerB.name))
}

export default useStore;