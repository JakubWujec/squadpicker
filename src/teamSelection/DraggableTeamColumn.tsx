import { styled } from '@mui/material/styles';
import { Droppable } from 'react-beautiful-dnd';
import { Player } from '../types';
import { Typography } from '@mui/material';
import DraggablePlayer from './DraggablePlayer';
import { ReactNode } from 'react';

const Container = styled('div')({
  margin: '8px',
  border: '1px solid lightgrey',
  borderRadius: '2px',
  width: '220px',
  display: 'flex',
  flexDirection: 'column',
});

const PlayerList = ({ isDraggingOver, children, innerRef }: { isDraggingOver: boolean, children: ReactNode, innerRef: any }) => {
  return <div style={{
    padding: '8px',
    transition: 'background-color 0.2s ease',
    backgroundColor: `${isDraggingOver ? 'skyblue' : 'white'}`,
    flexGrow: 1,
    minHeight: '100px',
  }}>
    {children}
  </div>
}


interface DraggableTeamColumnProps {
  players: Player[];
  title: string;
}

const DraggableTeamColumn = ({ players, title }: DraggableTeamColumnProps) => {

  return (
    <Container>
      <Typography>{title}</Typography>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <PlayerList
            innerRef={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {players.map((player, index) => (
              <DraggablePlayer key={player.name} player={player} index={index} />
            ))}
            {provided.placeholder}
          </PlayerList>
        )}
      </Droppable>
    </Container>
  );
}

export default DraggableTeamColumn;

