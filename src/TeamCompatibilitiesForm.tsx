import { useState } from 'react';
import { Button, TextField, Grid, MenuItem } from '@mui/material';
import { Player } from './types';

interface TeamCompatibilitiesFormProps {
  players: Player[];
  handleAddIncompatibility: (playerA: Player, playerB: Player) => void;
  handleAddCompatibility: (playerA: Player, playerB: Player) => void;
}

const TeamCompatibilitiesForm = ({
  players, handleAddCompatibility, handleAddIncompatibility
}: TeamCompatibilitiesFormProps) => {
  const [playerA, setPlayerA] = useState<Player | null>(null);
  const [playerB, setPlayerB] = useState<Player | null>(null);

  const bothPlayersSelected = playerA && playerB


  const handlePlayerAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerA(players.find(player => player.name === event.target.value) ?? null);
  };

  const handlePlayerBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerB(players.find(player => player.name === event.target.value) ?? null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Player A"
          value={playerA?.name}
          onChange={handlePlayerAChange}
          fullWidth
          margin="normal"
          select
        >
          {players.map((player) => (
            <MenuItem key={player.id} value={player.name}>
              {player.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Player B"
          value={playerB?.name}
          onChange={handlePlayerBChange}
          fullWidth
          margin="normal"
          select
        >
          {players.map((player) => (
            <MenuItem key={player.id} value={player.name}>
              {player.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={!bothPlayersSelected}
          variant="contained"
          color={'primary'}
          onClick={() => handleAddCompatibility(playerA!, playerB!)}>
          Add Compatibility
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={!bothPlayersSelected}
          variant="contained"
          color="secondary"
          onClick={() => handleAddIncompatibility(playerA!, playerB!)}>
          Add Incompatibility
        </Button>
      </Grid>
    </Grid >
  );
};

export default TeamCompatibilitiesForm;
