
import { Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import { Player } from '../types';
import DraggableTeamColumn from './DraggableTeamColumn';

interface DraggableSelectionProps {
  teams: Player[][];
}

const DraggableSelection = ({ teams }: DraggableSelectionProps) => {
  return (
    <DragDropContext onDragEnd={() => { console.log("Ha") }}>
      <Box sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
        <DraggableTeamColumn players={teams[0]} title="Team 0"></DraggableTeamColumn>
        <DraggableTeamColumn players={teams[1]} title="Team 1"></DraggableTeamColumn>
      </Box>
    </DragDropContext >
  );
};

export default DraggableSelection;