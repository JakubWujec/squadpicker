import { useState } from "react";
import TeamCompatibilitiesForm from "./TeamCompatibilitiesForm";
import { Player } from "./types";
import TeamCompatibilitiesList from "./TeamCompatibilitiesList";

interface CompatibilitiesProps {
  players: Player[];
}

const Compatibilities = ({ players }: CompatibilitiesProps) => {
  const [compatibilities, setCompatibilities] = useState<[Player, Player][]>([]);
  const [incompatibilities, setIncompatibilities] = useState<[Player, Player][]>([]);

  const handleAddCompatibility = (playerA: Player, playerB: Player) => {
    if (playerA && playerB) {
      setCompatibilities([...compatibilities, [playerA, playerB]])
    }
  };

  const handleAddIncompatibility = (playerA: Player, playerB: Player) => {
    if (playerA && playerB) {
      setIncompatibilities([...compatibilities, [playerA, playerB]])
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


export default Compatibilities;