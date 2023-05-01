import { useState } from "react";
import TeamCompatibilitiesForm from "./TeamCompatibilitiesForm";
import { Compatibility, Player } from "./types";
import { CompatibilityValue } from "./enums";
import TeamCompatibilitiesList from "./TeamCompatibilitiesList";

interface CompatibilitiesProps {
  players: Player[];
}

const TeamCompatibilities = ({ players }: CompatibilitiesProps) => {
  const [compatibilities, setCompatibilities] = useState<Compatibility[]>([]);

  const handleAddCompatibility = (playerA: Player, playerB: Player) => {
    if (playerA && playerB) {
      setCompatibilities([...compatibilities, { playerA, playerB, value: CompatibilityValue.MustPlayTogether }])
    }
  };

  const handleAddIncompatibility = (playerA: Player, playerB: Player) => {
    if (playerA && playerB) {
      setCompatibilities([...compatibilities, { playerA, playerB, value: CompatibilityValue.CannotPlayTogether }])
    }
  };

  return (
    <div>
      <TeamCompatibilitiesForm
        players={players}
        handleAddCompatibility={handleAddCompatibility}
        handleAddIncompatibility={handleAddIncompatibility}
      />
      <TeamCompatibilitiesList compatibilities={compatibilities} />
    </div >
  )
}


export default TeamCompatibilities;