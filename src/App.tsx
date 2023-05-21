import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPlayers from './AddPlayers';
import Header from './Header';
import TeamCompatibilities from './TeamCompatibilities';
import TeamSelection from './TeamSelection';

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
