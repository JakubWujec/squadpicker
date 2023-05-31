import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { Box } from '@mui/material';

import DroppableTeamColumn from './DroppableTeamColumn';
import { Team, Teams } from '../../types';
import useStore from '../../store/appStore';

const DraggableSelection = () => {
  const teams = useStore((store) => store.teams);
  const setTeams = useStore((store) => store.setTeams)

  const dragEndHandler: OnDragEndResponder = ({ source, destination }) => {
    if (destination && destination.droppableId != source.droppableId) {
      // eslint-disable-next-line prefer-const
      let teamsCopy = JSON.parse(JSON.stringify(teams)) as Teams;
      const teamFrom = source.droppableId;
      const playerName = teamsCopy[teamFrom].playerNames[source.index];
      const teamTo = destination.droppableId;
      console.log("XX", playerName, teamFrom, teamTo);
      teamsCopy[teamFrom].playerNames = teamsCopy[teamFrom].playerNames.filter(pn => pn != playerName);
      teamsCopy[teamTo].playerNames = [...(teams[teamTo].playerNames), playerName];
      setTeams(teamsCopy);
    }
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Box sx={{ display: "flex", maxWidth: 400, mx: 'auto', my: 4 }}>
        <DroppableTeamColumn team={teams["team1"]}></DroppableTeamColumn>
        <DroppableTeamColumn team={teams["team2"]}></DroppableTeamColumn>
      </Box>
    </DragDropContext >)

};

export default DraggableSelection;