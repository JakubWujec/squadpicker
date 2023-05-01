import { useState } from 'react';
import { Compatibility } from '../types';

const useTeamCompatibility = (initialCompatibilities: Compatibility[] = []) => {
  const [compatibilities, setCompatibilities] = useState<Compatibility[]>(initialCompatibilities);

  const addCompatibility = (compatibility: Compatibility) => {
    setCompatibilities([...compatibilities, compatibility])
  };

  return {
    compatibilities,
    addCompatibility,
  };
};

export default useTeamCompatibility;