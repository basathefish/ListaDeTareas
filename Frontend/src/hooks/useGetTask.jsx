import {  useState, useEffect } from "react";

export const useGetTask = (id) => {

  const [task, setTask] = useState({});

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tareas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la tarea");
        }
        const result = await response.json();
        setTask(result);
      } catch (error) {
        console.error(error);
      }
    };
    getTask();
  }, [id]);

  return { task };
};

export default useGetTask;
