import TeamCompatibilitiesForm from "./TeamCompatibilitiesForm";
import TeamCompatibilitiesList from "./TeamCompatibilitiesList";
import { Player } from "./types";
import useTeamCompatibility from "./hooks/useTeamCompatibility";

interface CompatibilitiesProps {
  players: Player[];
}

const TeamCompatibilities = ({ players }: CompatibilitiesProps) => {
  const { compatibilities, addCompatibility } = useTeamCompatibility([])

  return (
    <div>
      <TeamCompatibilitiesForm
        players={players}
        handleAddCompatibility={addCompatibility}
      />
      <TeamCompatibilitiesList compatibilities={compatibilities} />
    </div >
  )
}


export default TeamCompatibilities;