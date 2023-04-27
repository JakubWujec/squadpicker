import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamSelection from './TeamSelection';
import { Player } from './types';
import { useState, useEffect } from 'react';

function getLocalStorage<T>(key: string, initialValue: T) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function App() {
  const [players, setPlayers] = useState<Player[]>(() => getLocalStorage<Player[]>("players", []));

  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      const parsedPlayers = JSON.parse(storedPlayers) as Player[];
      setPlayers(parsedPlayers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  function addPlayer(player: Player) {
    setPlayers((players) => [...players, player])
  }

  function removePlayer(playerId: number) {
    setPlayers(players => players.filter(p => p.id != playerId))
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className='routes'>
          <Routes>
            <Route path="/" element={<AddPlayers addPlayer={addPlayer} removePlayer={removePlayer} players={players} />} />
            <Route path="/teams" element={<TeamSelection players={players} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  );
}

export default App
