import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Typography } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamSelection from './TeamSelection';
import { usePlayers } from './hooks/usePlayers';
import useTeamCompatibility from './hooks/useTeamCompatibility';
import TeamCompatibilitiesForm from './TeamCompatibilitiesForm';
import TeamCompatibilitiesList from './TeamCompatibilitiesList';

function App() {
  const { players, addPlayer, removePlayer } = usePlayers();
  const { compatibilities, addCompatibility, removeCompatibility } = useTeamCompatibility()

  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2500} />
        <main className='routes'>
          <Routes>
            <Route path="/" element={<AddPlayers addPlayer={addPlayer} removePlayer={removePlayer} players={players} />} />
            <Route path="/teams" element={<TeamSelection players={players} compatibilities={compatibilities} />} />
            <Route path="/compatiblities" element={<>
              {players.length > 0 &&
                <>
                  <TeamCompatibilitiesForm
                    players={players}
                    handleAddCompatibility={addCompatibility}
                  />
                  <TeamCompatibilitiesList compatibilities={compatibilities} onDelete={removeCompatibility} /></>}
              {players.length === 0 && <Typography>Not enough players</Typography>}
            </>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  );
}

export default App
