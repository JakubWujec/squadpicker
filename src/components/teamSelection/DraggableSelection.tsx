import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import DroppableTeamColumn from './DroppableTeamColumn';
import { Team, Teams } from '../../types';
import useStore from '../../store/appStore';
import { ReactNode } from 'react';

const Container = ({ children, ...props }: { children: ReactNode }) => {
  return <div {...props} style={{
    margin: '8px',
    border: '1px solid lightgrey',
    borderRadius: '2px',
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
  }}>
    {children}
  </div>
}

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
      <Box sx={{ display: "flex", justifyContent: "center", maxWidth: 800, mx: 'auto', my: 4 }}>
        {Object.values(teams).map(_team =>
          <Container>
            <Typography>{_team.teamId}</Typography>
            <DroppableTeamColumn team={_team}></DroppableTeamColumn>
          </Container>
        )}
      </Box>
    </DragDropContext >)

};

export default DraggableSelection;