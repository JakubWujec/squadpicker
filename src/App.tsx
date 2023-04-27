import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamSelection from './TeamSelection';
import { Player } from './types';
import { useState } from 'react';

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

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
        <Routes>
          <Route path="/" element={<AddPlayers addPlayer={addPlayer} removePlayer={removePlayer} players={players} />} />
          <Route path="/teams" element={<TeamSelection players={players} />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App
