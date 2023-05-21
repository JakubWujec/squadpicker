import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Compatibility, Player } from '../../types';
import TeamPlayers from './TeamPlayers';
import { CompatibilityValue } from '../../enums';
import useStore from '../../store/appStore';


const TeamSelection = () => {
  const players = useStore((store) => store.players);
  const compatibilities = useStore((store) => store.compatibilities);
  const [firstTeam, setFirstTeam] = useState<Player[]>([]);
  const [secondTeam, setSecondTeam] = useState<Player[]>([]);
  const pass = compatibilitiesFullfilled([firstTeam, secondTeam], compatibilities);

  function compatibilitiesFullfilled(teams: Player[][], compatibilities: Compatibility[]) {
    for (const compatibility of compatibilities) {
      if (!compatibilityFullfilled(teams, compatibility)) {
        return false;
      }
    }
    return true;
  }

  function compatibilityFullfilled(teams: Player[][], compatibility: Compatibility) {
    const { playerA, playerB, value } = compatibility;
    if (value === CompatibilityValue.MustPlayTogether) {
      for (const team of teams) {
        if (team.map(x => x.name).includes(playerA.name) && team.map(x => x.name).includes(playerB.name)) {
          return true;
        }
      }
      return false;
    } else if (value === CompatibilityValue.CannotPlayTogether) {
      for (const team of teams) {
        if (team.map(x => x.name).includes(playerA.name) && team.map(x => x.name).includes(playerB.name)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function randomlyDivide() {
    let tries = 0;
    let teamA: Player[] = [];
    let teamB: Player[] = [];
    let pool = [...players];

    while (tries < 500) {
      pool = [...players];
      for (let i = 0; i < Math.floor(players.length / 2); i++) {
        const randomIndex = Math.floor(Math.random() * pool.length)
        const randomPlayer = pool[randomIndex]
        teamA.push(randomPlayer)
        pool.splice(randomIndex, 1);
      }

      if (compatibilitiesFullfilled([teamA, pool], compatibilities)) {
        teamB = pool;
        break;
      }

      teamA = []
      tries++;
    }

    if (teamA.length) {
      setFirstTeam(teamA);
      setSecondTeam(teamB)
    }
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={randomlyDivide}>
          Losuj drużyny
        </Button>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <TeamPlayers title={'Team1'} players={firstTeam} />
        <TeamPlayers title={'Team2'} players={secondTeam} />
      </Box>
      <p>{pass ? 'PASS' : 'NOT PASS'}</p>
    </Box>
  );
};

export default TeamSelection;