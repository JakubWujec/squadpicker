import { Box } from '@mui/material';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import { Player } from './types';

interface AddPlayersProps {
  addPlayer(player: Player): void
  removePlayer(playerName: string): void
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