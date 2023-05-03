import { useEffect, useState } from 'react';
import { Compatibility, Player } from '../types';
import { getLocalStorage } from '../utils';

const useTeamCompatibility = () => {
  const [compatibilities, setCompatibilities] = useState<Compatibility[]>(getLocalStorage<Compatibility[]>('compatibilities', []));
  console.log(compatibilities)
  useEffect(() => {
    localStorage.setItem('compatibilities', JSON.stringify(compatibilities));
  }, [compatibilities]);

  const addCompatibility = (newCompatibility: Compatibility) => {
    setCompatibilities(old => [...old.filter(comp => isCompatibilityBetweenPlayers(comp, newCompatibility.playerA, newCompatibility.playerB)), newCompatibility])
  };

  const removeCompatibility = (compatibilityToRemove: Compatibility) => {
    setCompatibilities(old => old.filter(comp => isCompatibilityBetweenPlayers(comp, compatibilityToRemove.playerA, compatibilityToRemove.playerB)))
  }

  const isCompatibilityBetweenPlayers = (compatibility: Compatibility, playerA: Player, playerB: Player) => {
    let playerNames = [playerA.name, playerB.name]
    return !(playerNames.includes(compatibility.playerA.name) && playerNames.includes(compatibility.playerB.name))
  }


  return {
    compatibilities,
    addCompatibility,
    removeCompatibility
  };
};

export default useTeamCompatibility;