"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

// Define el tipo para los elementos
interface Item {
  id: string;
  content: string;
}

// Define el tipo para las columnas
interface Columns {
  column1: Item[];
  column2: Item[];
}

const Software = () => {
  const initialItemsCol1: Item[] = [
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
  ];

  const initialItemsCol2: Item[] = [
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ];

  const [columns, setColumns] = useState<Columns>({
    column1: initialItemsCol1,
    column2: initialItemsCol2,
  });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceCol = result.source.droppableId as keyof Columns;
    const destCol = result.destination.droppableId as keyof Columns;

    // Si se arrastra dentro de la misma columna
    if (sourceCol === destCol) {
      const reorderedItems = Array.from(columns[sourceCol]);
      const [removed] = reorderedItems.splice(result.source.index, 1);
      reorderedItems.splice(result.destination.index, 0, removed);

      setColumns((prev) => ({
        ...prev,
        [sourceCol]: reorderedItems,
      }));
    } else {
      // Si se arrastra entre columnas
      const sourceItems = Array.from(columns[sourceCol]);
      const destItems = Array.from(columns[destCol]);
      const [removed] = sourceItems.splice(result.source.index, 1);

      destItems.splice(result.destination.index, 0, removed);

      setColumns({
        ...columns,
        [sourceCol]: sourceItems,
        [destCol]: destItems,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4">
        {/* Columna 1 */}
        <Droppable droppableId="column1">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-4 bg-blue-100 w-1/2 rounded shadow"
            >
              <h2 className="font-bold mb-2">Columna 1</h2>
              {columns.column1.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-gray-200 border border-gray-400 rounded mb-2"
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Columna 2 */}
        <Droppable droppableId="column2">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-4 bg-green-100 w-1/2 rounded shadow"
            >
              <h2 className="font-bold mb-2">Columna 2</h2>
              {columns.column2.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-gray-200 border border-gray-400 rounded mb-2"
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Software;
