import Header from "../components/Header";
import { AddButton } from "../components/AddButton";
import ListTask from "../components/ListTasks";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="bg-gray-950 relative grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <Header />
        <div className="flex flex-col items-center w-full h-full gap-4">
          {/* Botón que me redirije al formulario para añadir una tarea*/}
          <AddButton />

          {/* Componente que muestra la lista de tareas */}
          <ListTask />
        </div>
        <footer className="text-center text-gray-50 p-6">Footer</footer>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
