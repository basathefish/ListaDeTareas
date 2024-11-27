import { useState, useEffect } from "react";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tareas");
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        console.log("fetchTasks done");
      }
    };
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
  };
};
