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


// function App() {
//   const [players, setPlayers] = useState<Player[]>([]);
//   const [firstTeam, setFirstTeam] = useState<Player[]>([]);
//   const [secondTeam, setSecondTeam] = useState<Player[]>([]);

//   function addPlayer(player: Player) {
//     setPlayers((players) => [...players, player])
//   }

//   function dividePlayersIntoTeams(players: Player[]): [Player[], Player[]] {
//     // Sortujemy graczy według ich skilli malejąco
//     const sortedPlayers = [...players].sort((a, b) => b.skill - a.skill);

//     // Tworzymy puste tablice na zawodników dla każdej z drużyn
//     const firstTeam: Player[] = [];
//     const secondTeam: Player[] = [];

//     // Przypisujemy kolejno po jednym zawodniku z listy posortowanej do drużyn,
//     // zaczynając od drużyny o mniejszej liczbie graczy
//     let currentTeam = firstTeam;
//     for (const player of sortedPlayers) {
//       currentTeam.push(player);
//       if (currentTeam === firstTeam) {
//         currentTeam = secondTeam;
//       } else {
//         currentTeam = firstTeam;
//       }
//     }

//     return [firstTeam, secondTeam];
//   }

//   function handleTeamSplit() {
//     const [firstTeamPlayers, secondTeamPlayers] = dividePlayersIntoTeams(players);

//     setFirstTeam(firstTeamPlayers);
//     setSecondTeam(secondTeamPlayers);
//   }


//   return (
//     <>
//       <PlayerForm onSubmit={addPlayer}></PlayerForm>
//       <PlayerList players={players} onDelete={(id) => setPlayers(players => players.filter(p => p.id != id))}></PlayerList >
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//         <Button variant="contained" color="primary" onClick={handleTeamSplit}>
//           Losuj drużyny
//         </Button>
//       </Box>
//       <TeamPlayers title={'Team1'} players={firstTeam}></TeamPlayers>
//       <TeamPlayers title={'Team2'} players={secondTeam}></TeamPlayers>
//     </>
//   )
// }

export default App
