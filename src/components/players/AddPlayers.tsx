import { Box } from '@mui/material';
import PlayerForm from './PlayerForm';
import useStore from '../../store/appStore';
import PlayerList from './PlayerList';


const AddPlayers = () => {
  const addPlayer = useStore((store) => store.addPlayer)
  const players = useStore((store) => store.players);
  const playersArray = Object.values(players);
  const removePlayer = useStore((store) => store.removePlayer)

  return (
    <Box>
      <PlayerForm onSubmit={addPlayer}></PlayerForm>
      <PlayerList players={playersArray} onDelete={removePlayer}></PlayerList >
    </Box>
  );
};

export default AddPlayers;