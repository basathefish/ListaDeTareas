import {  useState, useEffect } from "react";

export const useGetTask = (id) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    const getTask = async () => {
      try {
        // Obtiene el token del localStorage
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

         // Realiza la solicitud a la API con el encabezado de autorización
         const response = await fetch(`http://localhost:5000/api/tareas/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Envía el token
            "Content-Type": "application/json",
          },
        });

      // Verifica si la respuesta es correcta
        if (!response.ok) {
          throw new Error("Error al obtener la tarea");
        }
        const result = await response.json();
        setTask(result);
      } catch (error) {
        console.error("Error en getTask:", error.message);
      }
    };

    getTask();
  }, [id]);

  return { task };
};

export default useGetTask;
