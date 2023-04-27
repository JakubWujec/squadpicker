import { Player } from './types';
import { Box, Typography, List, ListItem } from '@mui/material';
import { useState } from 'react'
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

interface AddPlayersProps {
  addPlayer(player: Player): void
  removePlayer(playerId: number): void
  players: Player[]
}

const AddPlayers = ({ addPlayer, removePlayer, players }: AddPlayersProps) => {
  return (
    <Box>
      <PlayerForm onSubmit={addPlayer}></PlayerForm>
      <PlayerList players={players} onDelete={removePlayer}></PlayerList >
    </Box>
  );
};

export default AddPlayers;