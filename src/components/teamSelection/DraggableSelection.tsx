import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { Box } from '@mui/material';

import DroppableTeamColumn from './DroppableTeamColumn';
import { Team } from '../../types';
import useStore from '../../store/appStore';

// interface DraggableSelectionProps {
//   teams: Player[][];
// }


const DraggableSelection = () => {
  const teams = useStore((store) => store.teams);
  const setTeams = useStore((store) => store.setTeams)

  const dragEndHandler: OnDragEndResponder = ({ source, destination }) => {
    const { index, droppableId } = source;
    const teamFrom = teams.find(team => team.teamId === droppableId) as Team;
    const transferName = teamFrom.playerNames[index];

    setTeams([
      {
        teamId: "1",
        name: "Team 1",
        playerNames: [...teams[0].playerNames.filter(name => name != transferName)]
      },
      {
        teamId: "2",
        name: "Team 2",
        playerNames: [...teams[1].playerNames.filter(name => name != transferName)]
      }])
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Box sx={{ display: "flex", maxWidth: 400, mx: 'auto', my: 4 }}>
        <DroppableTeamColumn team={teams[0]}></DroppableTeamColumn>
        <DroppableTeamColumn team={teams[1]}></DroppableTeamColumn>
      </Box>
    </DragDropContext >)

};

export default DraggableSelection;