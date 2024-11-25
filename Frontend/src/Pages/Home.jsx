import { AddButton } from "../components/AddButton";
import ListTask from "../components/ListTasks";
const Home = () => {
  return (
    <div className="flex flex-col items-center h-full gap-4">
      {/* Botón que me redirije al formulario para añadir una tarea*/}
      <AddButton />

      {/* Componente que muestra la lista de tareas */}
      <ListTask />
    </div>
  );
};

export default Home;
