import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Compatibility, Player, Team, Teams, Players } from '../types';


interface AppState {
  players: Players;
  compatibilities: Compatibility[];
  teams: Teams;
  setTeams: (teams: Teams) => void;
  addPlayer: (player: Player) => void;
  removePlayer: (playerName: string) => void;
  addCompatibility: (newCompatibility: Compatibility) => void;
  removeCompatibility: (compatibility: Compatibility) => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      players: {},
      compatibilities: [],
      teams: {
        "team1": {
          teamId: "team1",
          name: "Team 1",
          playerNames: [],
        },
        "team2": {
          teamId: "team2",
          name: "Team 2",
          playerNames: [],
        }
      },
      setTeams: (teams: Teams) =>
        set(({ teams: teams })),
      addPlayer: (player: Player) =>
        set(store => ({ players: { ...JSON.parse(JSON.stringify(store.players)), [player.name]: player } })),
      removePlayer: (playerName: string) =>
        set(store => ({ players: omitPlayer(store.players, playerName) })),
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

function omitPlayer(players: Players, key: string) {
  let playersCopy = JSON.parse(JSON.stringify(players));
  console.log(playersCopy, key);
  delete playersCopy[key];
  console.log(playersCopy, key);
  return playersCopy
}


export default useStore;