import './App.css';

import { Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamCompatibilitiesForm from './TeamCompatibilitiesForm';
import TeamCompatibilitiesList from './TeamCompatibilitiesList';
import TeamSelection from './TeamSelection';
import useStore from './store/appStore';

function App() {
  const { players, addPlayer, removePlayer, compatibilities, addCompatibility, removeCompatibility } = useStore()

  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2500} />
        <main className='routes'>
          <Routes>
            <Route path="/squadpicker" element={<AddPlayers addPlayer={addPlayer} removePlayer={removePlayer} players={players} />} />
            <Route path="/squadpicker/teams" element={<TeamSelection players={players} compatibilities={compatibilities} />} />
            <Route path="/squadpicker/compatiblities" element={<>
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
