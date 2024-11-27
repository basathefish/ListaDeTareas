export const useAddTask = () => {
  const addTask = async (task) => {
    try {
      const response = await fetch("http://localhost:5000/api/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Error al agregar la tarea");
      }

      const result = await response.json();
      window.location.href = "/";

      console.log("Tarea agregada:", result);
    } catch (error) {
      console.error(error);
    }
  };

  return { addTask };
};
