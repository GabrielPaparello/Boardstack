"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const Software = () => {
  const [value, setValue] = useState({ id: "", title: "" });
  const [columns, setColumns] = useState<Column[]>([]);
  const [taskInputs, setTaskInputs] = useState<{ [key: string]: string }>({});

  interface Column {
    id: string;
    title: string;
    tasks: Task[];
  }

  interface Task {
    id: string;
    title: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const addColumn = () => {
    if (value.title) {
      setColumns((prevColumns) => [
        ...prevColumns,
        { id: uuidv4(), title: value.title, tasks: [] },
      ]);
      setValue({ id: "", title: "" });
    }
  };

  const handleTaskInputChange = (
    columnId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskInputs((prev) => ({ ...prev, [columnId]: e.target.value })); // Almacena el valor del input por columna
  };

  const addTask = (columnId: string) => {
    const newTask = { id: uuidv4(), title: taskInputs[columnId] };
    setColumns((prevColumns) => {
      return prevColumns.map((column) => {
        if (column.id === columnId) {
          return { ...column, tasks: [...column.tasks, newTask] };
        }
        return column;
      });
    });
    setTaskInputs((prev) => ({ ...prev, [columnId]: "" })); // Limpia el input de tarea para esa columna
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColIndex = columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const destColIndex = columns.findIndex(
      (col) => col.id === destination.droppableId
    );

    // Si el arrastre-DRAG fue en la misma columna
    if (sourceColIndex === destColIndex) {
      const reorderedTasks = Array.from(columns[sourceColIndex].tasks);
      const [removed] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, removed);

      const newColumns = [...columns];
      newColumns[sourceColIndex].tasks = reorderedTasks;

      setColumns(newColumns);
    } else {
      // Si el arrastre-DRAG fue entre columnas
      const sourceTasks = Array.from(columns[sourceColIndex].tasks);
      const destTasks = Array.from(columns[destColIndex].tasks);
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      const newColumns = [...columns];
      newColumns[sourceColIndex].tasks = sourceTasks;
      newColumns[destColIndex].tasks = destTasks;

      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col items-center mt-10 justify-center gap-2">
        <input
          type="text"
          name="title"
          value={value.title}
          placeholder="Add Column"
          onChange={handleChange}
          className=""
        />
        <button onClick={addColumn} className="bg-blue-400 p-2">
          Send Column
        </button>

        <div className="flex gap-7 text-center">
          {columns.map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col gap-2 bg-gray-200 p-5"
                >
                  <h3 className="font-bold">{column.title}</h3>
                  <input
                    type="text"
                    placeholder="Add Task"
                    value={taskInputs[column.id] || ""}
                    onChange={(e) => handleTaskInputChange(column.id, e)}
                  />
                  <button
                    className="bg-blue-400 p-2"
                    onClick={() => addTask(column.id)}
                  >
                    Add Task
                  </button>
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p className="text-blue-400">{task.title}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Software;
