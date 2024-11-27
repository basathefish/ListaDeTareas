export const useDeleteTask = ()=> {

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tareas/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la tarea");
      }

      window.location.href = "/";
      console.log("Tarea eliminada:", id);
    } catch (error) {
      console.error(error);
    }
  };

  return { deleteTask };
}

export default useDeleteTask