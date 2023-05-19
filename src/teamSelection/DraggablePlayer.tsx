import { Draggable } from '@hello-pangea/dnd';
import { Player } from '../types';
import { ReactNode } from 'react';

const Container = ({ isDragging, children, innerRef, ...props }: { isDragging: boolean, children: ReactNode, innerRef: any }) => {
  return <div {...props} style={{
    border: '1px solid lightgrey',
    borderRadius: '2px',
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: `${isDragging ? 'lightgreen' : 'white'}`,
  }} ref={innerRef}>
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
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {player.name}
        </Container>

      )}
    </Draggable>
  );

}

export default DraggablePlayer;