import { Player } from './types';
import { Box, Typography, List, ListItem } from '@mui/material';

interface TeamPlayersProps {
  title: string;
  players: Player[];
}

const TeamPlayers = ({ title, players }: TeamPlayersProps) => {
  const skillSum = players.reduce((acc, currentPlayer) => acc + currentPlayer.skill, 0)

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title} ({skillSum} skill)
      </Typography>
      <List>
        {players.map((player) => (
          <ListItem key={player.name}>
            {player.name} (skill: {player.skill})
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TeamPlayers;