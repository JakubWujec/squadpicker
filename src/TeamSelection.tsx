import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Compatibility, Player } from './types';
import TeamPlayers from './TeamPlayers';
import { CompatibilityValue } from './enums';

interface TeamSelectionProps {
  players: Player[];
  compatibilities: Compatibility[];
}

const TeamSelection = ({ players, compatibilities }: TeamSelectionProps) => {
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
        if (team.includes(playerA) && team.includes(playerB)) {
          return true;
        }
      }
      return false;
    } else if (value === CompatibilityValue.CannotPlayTogether) {
      for (const team of teams) {
        if (team.includes(playerA) && team.includes(playerB)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function dividePlayersIntoTeams(players: Player[]): [Player[], Player[]] {
    // Sortujemy graczy według ich skilli malejąco
    const sortedPlayers = [...players].sort((a, b) => b.skill - a.skill);

    // Tworzymy puste tablice na zawodników dla każdej z drużyn
    const firstTeam: Player[] = [];
    const secondTeam: Player[] = [];

    // Przypisujemy kolejno po jednym zawodniku z listy posortowanej do drużyn,
    // zaczynając od drużyny o mniejszej liczbie graczy
    let currentTeam = firstTeam;
    for (const player of sortedPlayers) {
      currentTeam.push(player);
      if (currentTeam === firstTeam) {
        currentTeam = secondTeam;
      } else {
        currentTeam = firstTeam;
      }
    }

    return [firstTeam, secondTeam];
  }

  function handleTeamSplit() {
    const [firstTeamPlayers, secondTeamPlayers] = dividePlayersIntoTeams(players);

    setFirstTeam(firstTeamPlayers);
    setSecondTeam(secondTeamPlayers);
  }


  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleTeamSplit}>
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