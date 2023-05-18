import { Draggable } from 'react-beautiful-dnd';
import { Player } from '../types';
import { ReactNode } from 'react';

const Container = ({ isDragging, children, ref }: { isDragging: boolean, children: ReactNode, ref: any }) => {
  return <div style={{
    border: '1px solid lightgrey',
    borderRadius: '2px',
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: `${isDragging ? 'lightgreen' : 'white'}`,
  }}>
    {children}
  </div>
}


interface DraggablePlayer {
  player: Player
  index: number;
}

const DraggablePlayer = ({ player, index }: DraggablePlayer) => {
  return (
    <Draggable draggableId={player.name} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {player.name}
        </Container>
      )}
    </Draggable>
  );

}

export default DraggablePlayer;