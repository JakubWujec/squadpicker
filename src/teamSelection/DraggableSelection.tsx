

import { DragDropContext } from '@hello-pangea/dnd';
import { Box } from '@mui/material';
import { Player } from '../types';
import DroppableTeamColumn from './DroppableTeamColumn';
interface DraggableSelectionProps {
  teams: Player[][];
}

const DraggableSelection = ({ teams }: DraggableSelectionProps) => {

  const dragEndHandler = ({ source, destination }) => {
    console.log(source, destination)
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