import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPlayers from './components/players/AddPlayers';
import Header from './components/layout/Header';
import TeamCompatibilities from './components/compatibilities/TeamCompatibilities';
import TeamSelection from './components/teams/TeamSelection';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2500} />
        <main className='routes'>
          <Routes>
            <Route path="/squadpicker" element={<AddPlayers />} />
            <Route path="/squadpicker/teams" element={<TeamSelection />} />
            <Route path="/squadpicker/compatiblities" element={<TeamCompatibilities />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  );
}

export default App
