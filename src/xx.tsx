import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Player } from './types';

interface PlayerListProps {
  players: Player[];
}

function PlayerList({ players }: PlayerListProps) {
  const [team1, setTeam1] = useState<Player[]>([]);
  const [team2, setTeam2] = useState<Player[]>([]);

  const handleSplitPlayers = () => {
    // Calculate total skill of all players
    const totalSkill = players.reduce((sum, player) => sum + player.skill, 0);

    // Shuffle players array
    const shuffledPlayers = players.sort(() => Math.random() - 0.5);

    let team1Skill = 0;
    let team2Skill = 0;
    let team1Index = 0;

    // Assign first player to team 1
    team1.push(shuffledPlayers[0]);
    team1Skill += shuffledPlayers[0].skill;

    // Assign remaining players to teams
    for (let i = 1; i < shuffledPlayers.length; i++) {
      const player = shuffledPlayers[i];

      // Calculate skill difference between teams
      const diff1 = Math.abs(team1Skill + player.skill - team2Skill);
      const diff2 = Math.abs(team2Skill + player.skill - team1Skill);

      if (diff1 < diff2) {
        // Add player to team 1
        team1.push(player);
        team1Skill += player.skill;
      } else {
        // Add player to team 2
        if (team1Index === 0) {
          // Find the player in team 1 with the closest skill to the current player
          for (let j = 1; j < team1.length; j++) {
            if (Math.abs(team1Skill - 2 * team1[j].skill - totalSkill) < Math.abs(team1Skill - 2 * team1[team1Index].skill - totalSkill)) {
              team1Index = j;
            }
          }
        }
        const playerToMove = team1.splice(team1Index, 1)[0];
        team2.push(playerToMove);
        team2Skill += playerToMove.skill;

        // Add current player to team 1
        team1.push(player);
        team1Skill += player.skill;
      }
    }
  };

  return (
    <>
      <Typography variant
