import { useParams } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import CancelButton from "../components/CancelButton";

const DeleteTask = () => {
  // Obtener el id de la tarea a eliminar
  const { id } = useParams();

  // Obtener la tarea a eliminar

  const task = {
    id: 1,
    title: "Tarea de Matemáticas",
    description: "Resolver los ejercicios del 1 al 10 de la página 50",
    category: "university",
  };

  const deleteTask = (e) => {
    e.preventDefault();
    console.log("Tarea eliminada");
  }

  return (
    <div className="bg-gray-950 absolute flex justify-center items-center w-full h-full bg-opacity-70 p-4">
      <form onSubmit={deleteTask} className="bg-gray-900 text-gray-50 p-2 rounded-2xl w-80">
        {/* Header del Modal */}
        <h2 className="text-center font-bold p-2 text-xl border-b-2 border-b-gray-400">
          Eliminar tarea
        </h2>

        {/* Contenido */}
        <div className="text-xl text-center p-6">
          <p className="font-medium">
            ¿Quiere eliminar esta tarea?
          </p>
          <p>Título: {task.title}</p>
        </div>

        {/* Botones para cancelar y eliminar */}
        <div className="flex gap-5 justify-between">
          <CancelButton />
          <button
            type="submit"
            className="flex justify-center items-center w-1/2 bg-violet-400 px-4 py-2 rounded hover:bg-violet-500 transition-colors"
          >
            Eliminar
            <PaperAirplaneIcon className="h-6 w-6 ml-2 text-violet-700" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTask;
