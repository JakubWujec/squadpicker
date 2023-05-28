import { Box, Button } from '@mui/material';
import { Compatibility, Player } from '../../types';
import TeamPlayers from './TeamPlayers';
import { CompatibilityValue } from '../../enums';
import useStore from '../../store/appStore';
import DraggableSelection from '../teamSelection/DraggableSelection';


const TeamSelection = () => {
  const players = useStore((store) => store.players);
  const compatibilities = useStore((store) => store.compatibilities);
  const teams = useStore((store) => store.teams);
  const setTeams = useStore((store) => store.setTeams)
  const firstTeamPlayers = teams[0].playerNames.map(playerName => players.find(player => player.name == playerName)).filter(p => p != null) as Player[]
  const secondTeamPlayers = teams[1].playerNames.map(playerName => players.find(player => player.name == playerName)).filter(p => p != null) as Player[]

  const pass = compatibilitiesFullfilled([firstTeamPlayers, secondTeamPlayers], compatibilities);

  function compatibilitiesFullfilled(teamPlayers: Player[][], compatibilities: Compatibility[]) {
    for (const compatibility of compatibilities) {
      if (!compatibilityFullfilled(teamPlayers, compatibility)) {
        return false;
      }
    }
    return true;
  }

  function compatibilityFullfilled(teamPlayers: Player[][], compatibility: Compatibility) {
    const { playerA, playerB, value } = compatibility;
    if (value === CompatibilityValue.MustPlayTogether) {
      for (const team of teamPlayers) {
        if (team.map(x => x.name).includes(playerA.name) && team.map(x => x.name).includes(playerB.name)) {
          return true;
        }
      }
      return false;
    } else if (value === CompatibilityValue.CannotPlayTogether) {
      for (const team of teamPlayers) {
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
    let playersInFirstTeam: Player[] = [];
    let playerInSecondTeam: Player[] = [];
    let pool = [...players];

    while (tries < 500) {
      pool = [...players];
      for (let i = 0; i < Math.floor(players.length / 2); i++) {
        const randomIndex = Math.floor(Math.random() * pool.length)
        const randomPlayer = pool[randomIndex]
        playersInFirstTeam.push(randomPlayer)
        pool.splice(randomIndex, 1);
      }

      if (compatibilitiesFullfilled([playersInFirstTeam, pool], compatibilities)) {
        playerInSecondTeam = pool;
        break;
      }

      playersInFirstTeam = []
      tries++;
    }

    if (playersInFirstTeam.length) {
      setTeams([
        {
          teamId: "1",
          name: "Team 1",
          playerNames: playersInFirstTeam.map(x => x.name)
        },
        {
          teamId: "2",
          name: "Team 2",
          playerNames: playerInSecondTeam.map(x => x.name)
        }]
      )
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
        <TeamPlayers title={'Team1'} players={firstTeamPlayers} />
        <TeamPlayers title={'Team2'} players={secondTeamPlayers} />
      </Box>
      <DraggableSelection></DraggableSelection>
      <p>{pass ? 'PASS' : 'NOT PASS'}</p>
    </Box>
  );
};

export default TeamSelection;