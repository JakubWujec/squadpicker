import { Player } from './types'
import { Box, IconButton, Typography } from '@mui/material';
import { Delete as DeleteIcon } from "@mui/icons-material"
interface PlayerListProps {
  players: Player[];
  onDelete: (name: string) => void;
}

const PlayerList = ({ players, onDelete }: PlayerListProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: "center" }}>
      {players.map((player) => (
        <Box
          key={player.name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            border: '1px solid gray',
            borderRadius: '8px',
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            {player.name}
          </Typography>
          <Typography variant="subtitle1">Skill: {player.skill}</Typography>
          <IconButton aria-label="delete" onClick={() => onDelete(player.name)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};
export default PlayerList;
