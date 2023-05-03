import { useState, useEffect } from 'react';
import { Player } from '../types';
import { toast } from 'react-toastify';
import { getLocalStorage } from '../utils';

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>(() =>
    getLocalStorage<Player[]>('players', [])
  );

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  function addPlayer(newPlayer: Player) {
    if (players.some(player => player.name === newPlayer.name)) {
      toast("Already exist")
    } else {
      setPlayers((players) => [...players, newPlayer]);
    }

  }

  function removePlayer(playerName: string) {
    setPlayers((players) => players.filter((p) => p.name !== playerName));
  }

  return { players, addPlayer, removePlayer };
}


