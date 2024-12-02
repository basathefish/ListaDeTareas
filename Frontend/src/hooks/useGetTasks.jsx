import { useState, useEffect, useCallback } from "react";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchTasks como función reutilizable
  const fetchTasks = useCallback(async () => {
    setLoading(true); 
    setError(null); 
    try {
      // Obtiene el token del localStorage
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Token no encontrado en localStorage");
      }

      // Realiza la solicitud a la API con el encabezado de autorización
      const response = await fetch("http://localhost:5000/api/tareas", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token
          "Content-Type": "application/json",
        },
      });

      // Verifica si la respuesta es correcta
      if (!response.ok) {
        throw new Error(`Error al obtener las tareas: ${response.status}`);
      }
      const data = await response.json();

      // Ordenar las tareas: las completadas al final
      const sortedTasks = data.sort((a, b) => {
        if (a.status === "completada" && b.status !== "completada") {
          return 1; // A va después de B
        } else if (a.status !== "completada" && b.status === "completada") {
          return -1; // B va después de A
        }
        return 0; // Mantiene el orden si ambos tienen el mismo estado
      });

      setTasks(sortedTasks); // Actualiza el estado con las tareas ordenadas
    } catch (error) {
      setError(error.message); // Maneja el error
    } finally {
      setLoading(false); // Finaliza la carga
      console.log("fetchTasks ejecutado");
    }
  }, []); 
  
  // Ejecuta fetchTasks al montarse el componente
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Retorna el estado junto con la función refetch
  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks, // Expone la función para ser reutilizada
  };
};

export default useGetTasks;
