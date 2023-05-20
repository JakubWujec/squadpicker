

import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { Box } from '@mui/material';
import { Player } from '../types';
import DroppableTeamColumn from './DroppableTeamColumn';
interface DraggableSelectionProps {
  teams: Player[][];
}

const DraggableSelection = ({ teams }: DraggableSelectionProps) => {

  const dragEndHandler: OnDragEndResponder = ({ source, destination }) => {
    console.log(source, destination);
    swapPlayers(teams[0][0], teams[1][0])
  }

  const swapPlayers = (player1: Player, player2: Player) => {
    if (teams[0].includes(player1) && teams[1].includes(player2)) {
      teams[0].splice(0, 1, player2)
      teams[1].splice(0, 1, player1)
    }
    if (teams[0].includes(player2) && teams[1].includes(player1)) {
      teams[0].splice(0, 1, player1)
      teams[1].splice(0, 1, player2)
    }
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Box sx={{ display: "flex", maxWidth: 400, mx: 'auto', my: 4 }}>
        <DroppableTeamColumn players={teams[0]} title="Team0"></DroppableTeamColumn>
        <DroppableTeamColumn players={teams[1]} title="Team1"></DroppableTeamColumn>
      </Box>
    </DragDropContext >)

};

export default DraggableSelection;