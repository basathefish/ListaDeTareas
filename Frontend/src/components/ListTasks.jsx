import CardTask from "../components/CardTask";
import ListEmpty from "./ListEmpty";
import { useGetTasks } from "../hooks/useGetTasks";

function ListTasks() {
  const { tasks, loading, error, refetch } = useGetTasks(); 

  if (loading) return <p className="text-gray-50">Cargando...</p>;
  if (error) return <p className="text-red-500">Error al cargar las tareas: {error}</p>;

  // Función para recargar la lista de tareas cuando se actualice una
  const handleTaskUpdated = () => {
    refetch(); 
  };

  return (
    <>
      {tasks.length === 0 ? (
        <ListEmpty />
      ) : (
        <div className="flex flex-wrap w-full gap-2 px-5">
          {tasks.map((task) => (
            <CardTask 
              key={task.id} 
              task={task} 
              onTaskUpdated={handleTaskUpdated} 
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ListTasks;
