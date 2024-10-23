"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const Software = () => {
  const initialItems = [
    { id: "idONE", content: "Item 1" },
    { id: "idTWO", content: "Item 2" },
    { id: "idTHREE", content: "Item 3" },
  ];
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            key={"droppable"}
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2" // Espaciado entre elementos
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    key={item.id}
                    className="p-4 bg-gray-200 border border-gray-400 rounded shadow hover:bg-gray-300 transition"
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Software;
