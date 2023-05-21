import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Player } from '../../types';
import { useTranslation } from 'react-i18next';

interface PlayerFormProps {
  onSubmit: (player: Player) => void;
  defaultPlayer?: Player
}

function PlayerForm({ onSubmit, defaultPlayer = { name: '', skill: 5 } }: PlayerFormProps) {
  const { t } = useTranslation();
  const [player, setPlayer] = useState(defaultPlayer);

  const setName = (name: string) => {
    setPlayer(old => { return { ...old, name } })
  }

  const setSkill = (skill: number) => {
    setPlayer(old => { return { ...old, skill } })
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSkillChange = (_event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setSkill(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(player);
    setName('');
    setSkill(5);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {t('addPlayer')}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nazwa"
          value={player.name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          required
        />
        <Box sx={{ mt: 2 }}>
          <Typography id="skill-slider" gutterBottom>
            {t("skill")}
          </Typography>
          <Slider
            value={player.skill}
            onChange={handleSkillChange}
            min={1}
            max={10}
            step={1}
            marks
            valueLabelDisplay="auto"
            aria-labelledby="skill-slider"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            {t('add')}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default PlayerForm;
