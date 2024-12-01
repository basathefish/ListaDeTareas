import { useState, useEffect } from "react";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch("http://localhost:5000/api/tareas", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Envía el token
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error al obtener las tareas: ${response.status}`);
        }


        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
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

export default useGetTasks;