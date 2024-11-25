import { useState } from "react";
import CardTask from "../components/CardTask";
import ListEmpty from "./ListEmpty";

function ListTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      category: "Personal",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 1",
      category: "Personal",
    }
  ]);

  return (
    <>
      {tasks.length === 0 ? (
        <ListEmpty />
      ) : (
        <div className="flex gap-2 w-full px-5">
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListTasks;
