import { useState } from 'react';
import { Compatibility } from '../types';

const useTeamCompatibility = (initialCompatibilities: Compatibility[] = []) => {
  const [compatibilities, setCompatibilities] = useState<Compatibility[]>(initialCompatibilities);

  const addCompatibility = (newCompatibility: Compatibility) => {

    setCompatibilities(old => [...old
      .filter(oldCompatibility => !(oldCompatibility.playerA === newCompatibility.playerA && oldCompatibility.playerB === newCompatibility.playerB)),
      newCompatibility])
  };

  return {
    compatibilities,
    addCompatibility,
  };
};

export default useTeamCompatibility;