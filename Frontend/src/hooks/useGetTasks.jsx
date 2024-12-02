import { useState, useEffect } from "react";
import { fetchTasks } from "../api/task";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await fetchTasks(); // Llama a la función fetchTasks de api/task.js
        if (tasks.length > 0) {
          console.log(tasks);
          setTasks(tasks);
        } else {
          console.log("El usuario no tiene tareas");
          setTasks([]);
        }
      } catch (error) {
        console.error("No se pudieron obtener las tareas:", error);
        setError(error);
      } finally {
        setLoading(false);
        console.log("fetchTasks done");
      }
    };

    fetchData(); // Ejecuta la función fetchData
  }, []);

  return {
    tasks,
    loading,
    error,
  };
};

export default useGetTasks;