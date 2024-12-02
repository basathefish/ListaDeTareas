import { useState, useEffect, useCallback } from "react";
import { fetchTasks } from "../api/task";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]); // Estado para almacenar tareas
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Define fetchTasks como función reutilizable con ordenación incluida
  const fetchAndSetTasks = useCallback(async () => {
    setLoading(true); // Inicia la carga
    setError(null); // Reinicia el error

    try {
      // Llama a la función existente para obtener tareas
      const data = await fetchTasks();

      // Ordena las tareas, colocando las completadas al final
      const sortedTasks = data.sort((a, b) => {
        if (a.status === "completada" && b.status !== "completada") {
          return 1;
        } else if (a.status !== "completada" && b.status === "completada") {
          return -1;
        }
        return 0;
      });

      setTasks(sortedTasks); // Actualiza el estado con las tareas ordenadas
    } catch (error) {
      setError(error.message || "Error al obtener tareas"); // Maneja el error
    } finally {
      setLoading(false); // Finaliza la carga
      console.log("fetchTasks ejecutado");
    }
  }, []); // No depende de props o estados externos

  // Ejecuta fetchAndSetTasks al montarse el componente
  useEffect(() => {
    fetchAndSetTasks();
  }, [fetchAndSetTasks]);

  // Retorna el estado junto con la función refetch
  return {
    tasks,
    loading,
    error,
    refetch: fetchAndSetTasks, // Expone la función para ser reutilizada
  };
};

export default useGetTasks;
