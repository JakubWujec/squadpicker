import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Compatibility, Player } from '../types';


interface AppState {
  players: Player[];
  compatibilities: Compatibility[];
  addPlayer: (player: Player) => void;
  removePlayer: (playerName: string) => void;
  addCompatibility: (compatiblity: Compatibility) => void;
  removeCompatibility: (compatiblity: Compatibility) => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      players: [],
      compatibilities: [],
      addPlayer: (player: Player) =>
        set(store => ({ players: [...store.players, player] })),
      removePlayer: (playerName: string) =>
        set(store => ({ players: store.players.filter(p => p.name != playerName) })),
      addCompatibility: (compatiblity: Compatibility) =>
        set(store => ({ compatibilities: [...store.compatibilities, compatiblity] })),
      removeCompatibility: (compatiblity: Compatibility) =>
        set(store => ({ compatibilities: store.compatibilities.filter(c => c != compatiblity) })),
    }),
    {
      name: 'zustand-squad',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useStore;