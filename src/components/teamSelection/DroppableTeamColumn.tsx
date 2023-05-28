import { Typography } from '@mui/material';
import DraggablePlayer from './DraggablePlayer';
import { ReactNode } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Player } from '../../types';


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

const PlayerList = ({ isDraggingOver, children, innerRef, ...props }: { isDraggingOver: boolean, children: ReactNode, innerRef: any }) => {
  return <div {...props} style={{
    padding: '8px',
    transition: 'background-color 0.2s ease',
    backgroundColor: `${isDraggingOver ? 'skyblue' : 'white'}`,
    flexGrow: 1,
    minHeight: '100px',
  }} ref={innerRef}>
    {children}
  </div>
}

interface DroppableTeamColumnProps {
  players: Player[];
  title: string;
}

const DroppableTeamColumn = ({ players, title }: DroppableTeamColumnProps) => {

  return (
    <Container>
      <Typography>{title}</Typography>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <PlayerList
            {...provided.droppableProps}
            innerRef={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {players.map((player, index) => (
              <DraggablePlayer player={player} index={index}></DraggablePlayer>
            ))}
            {provided.placeholder}
          </PlayerList>
        )}
      </Droppable>

    </Container >
  );
}

export default DroppableTeamColumn;