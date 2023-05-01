import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamCompatibilities from './TeamCompatibilities';
import TeamSelection from './TeamSelection';
import { usePlayers } from './hooks/usePlayers';

function App() {
  const { players, addPlayer, removePlayer } = usePlayers();

  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2500} />
        <main className='routes'>
          <Routes>
            <Route path="/" element={<AddPlayers addPlayer={addPlayer} removePlayer={removePlayer} players={players} />} />
            <Route path="/teams" element={<TeamSelection players={players} />} />
            <Route path="/compatiblities" element={<TeamCompatibilities players={players} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  );
}

export default App
