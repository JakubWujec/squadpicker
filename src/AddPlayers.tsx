import { Box } from '@mui/material';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import useStore from './store/appStore';


const AddPlayers = () => {
  const addPlayer = useStore((store) => store.addPlayer)
  const players = useStore((store) => store.players);
  const removePlayer = useStore((store) => store.removePlayer)

  return (
    <Box>
      <PlayerForm onSubmit={addPlayer}></PlayerForm>
      <PlayerList players={players} onDelete={removePlayer}></PlayerList >
    </Box>
  );
};

export default AddPlayers;