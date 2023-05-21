import TeamCompatibilitiesForm from "./TeamCompatibilitiesForm"
import TeamCompatibilitiesList from "./TeamCompatibilitiesList";
import useStore from "../../store/appStore";
import { Typography } from '@mui/material';

const TeamCompatibilities = () => {
  const players = useStore((store) => store.players);
  const compatibilities = useStore((store) => store.compatibilities);
  const addCompatibility = useStore((store) => store.addCompatibility);
  const removeCompatibility = useStore((store) => store.removeCompatibility)

  if (players.length === 0) {
    return <Typography>Not enough players</Typography>
  }

  return <div>
    <TeamCompatibilitiesForm
      players={players}
      handleAddCompatibility={addCompatibility}
    />
    <TeamCompatibilitiesList compatibilities={compatibilities} onDelete={removeCompatibility} />
  </div>
};

export default TeamCompatibilities