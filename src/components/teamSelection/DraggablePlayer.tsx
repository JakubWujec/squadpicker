import { Draggable } from '@hello-pangea/dnd';
import { ReactNode } from 'react';
import { Player } from '../../types';

const Container = ({ isDragging, children, innerRef, ...props }: { isDragging: boolean, children: ReactNode, innerRef: any }) => {
  return <div {...props}
    ref={innerRef}>
    <div style={{
      border: '1px solid lightgrey',
      borderRadius: '2px',
      padding: '8px',
      marginBottom: '8px',
      backgroundColor: `${isDragging ? 'lightgreen' : 'white'}`,
    }}>
      {children}
    </div>
  </div>
}


interface DraggablePlayer {
  player: Player
  index: number;
}

const DraggablePlayer = ({ player, index, ...props }: DraggablePlayer) => {
  return (
    <Draggable draggableId={player.name} index={index} {...props}>
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