import CardTask from "../components/CardTask";
import ListEmpty from "./ListEmpty";
import { useGetTasks } from "../hooks/useGetTasks";

function ListTasks() {
  
  const { tasks, loading, error} = useGetTasks();

  if (loading) return <p className="text-gray-50">Cargando...</p>;

  return (
    <>
      {tasks.length === 0 ? (
        <ListEmpty />
      ) : (
        <div className="flex flex-wrap w-full gap-2 px-5">
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListTasks;
