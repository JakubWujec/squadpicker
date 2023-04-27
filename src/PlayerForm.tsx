import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // import biblioteki generującej unikalne identyfikatory UUID
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


interface PlayerFormProps {
  onSubmit: (player: Player) => void;
}

function PlayerForm({ onSubmit }: PlayerFormProps) {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState(5);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSkillChange = (event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setSkill(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ id: Math.floor(Math.random() * 1000000), name, skill }); // generowanie losowego id za pomocą Math.random()
    setName('');
    setSkill(5);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Dodaj gracza
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nazwa"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
        />
        <Box sx={{ mt: 2 }}>
          <Typography id="skill-slider" gutterBottom>
            Skill
          </Typography>
          <Slider
            value={skill}
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
            Dodaj
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default PlayerForm;
