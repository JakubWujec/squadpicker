import { useState } from 'react';
import { Button, TextField, Grid, MenuItem } from '@mui/material';
import { Compatibility, Player } from '../../types';
import { CompatibilityValue } from '../../enums';

interface TeamCompatibilitiesFormProps {
  players: Player[];
  handleAddCompatibility: (compatibility: Compatibility) => void;
}

const TeamCompatibilitiesForm = ({
  players, handleAddCompatibility
}: TeamCompatibilitiesFormProps) => {
  const [playerA, setPlayerA] = useState<Player>(players[0]);
  const [playerB, setPlayerB] = useState<Player>(players[0]);

  const canAddCompatiblity = playerA && playerB && playerA.name != playerB.name;

  const handlePlayerAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerA(players.find(player => player.name === event.target.value) ?? players[0]);
  };

  const handlePlayerBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerB(players.find(player => player.name === event.target.value) ?? players[0]);
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
            <MenuItem key={player.name} value={player.name}>
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
            <MenuItem key={player.name} value={player.name}>
              {player.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={!canAddCompatiblity}
          variant="contained"
          color={'primary'}
          onClick={() => handleAddCompatibility({ playerA: playerA!, playerB: playerB!, value: CompatibilityValue.MustPlayTogether })}>
          Add Compatibility
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={!canAddCompatiblity}
          variant="contained"
          color="secondary"
          onClick={() => handleAddCompatibility({ playerA: playerA!, playerB: playerB!, value: CompatibilityValue.CannotPlayTogether })}>
          Add Incompatibility
        </Button>
      </Grid>
    </Grid >
  );
};

export default TeamCompatibilitiesForm;
