import { Player } from './types';
import { Box, Typography, List, ListItem } from '@mui/material';
import { useState } from 'react'
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

const AddPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(player: Player) {
    setPlayers((players) => [...players, player])
  }

  function removePlayer(playerId: number) {
    setPlayers(players => players.filter(p => p.id != playerId))
  }

  return (
    <Box>
      <PlayerForm onSubmit={addPlayer}></PlayerForm>
      <PlayerList players={players} onDelete={removePlayer}></PlayerList >
    </Box>
  );
};

export default AddPlayers;