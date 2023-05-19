import { Player } from '../types';
import { Typography } from '@mui/material';
import DraggablePlayer from './DraggablePlayer';
import { ReactNode } from 'react';
import { Droppable } from '@hello-pangea/dnd';
const Container = ({ children }: { children: ReactNode }) => {
  return <div style={{
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
      <>
        <Typography>{title}</Typography>
        <Droppable droppableId={title}>
          {(provided, snapshot) => (
            <PlayerList
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {players.map((player, index) => (
                <DraggablePlayer key={player.name} player={player} index={index} />
              ))}
              {provided.placeholder}
            </PlayerList>
          )}
        </Droppable>
      </>
    </Container>
  );
}

export default DroppableTeamColumn;

