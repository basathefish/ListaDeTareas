import {
  CheckCircleIcon,
  PencilSquareIcon,
  ClockIcon,
  TagIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function CardTask({ task }) {
  const completeTask = () => {
    console.log("Tarea completada");
  };

  return (
    <div className="bg-gray-700 w-[376px] p-4 rounded-xl flex flex-col justify-between gap-3">
      {/* Nombre de la tarea */}
      <div className="flex justify-between items-center w-full">
        {/* Boton para marcar como completada */}
        <button onClick={completeTask}>
          <CheckCircleIcon className="w-8 h-8 text-gray-50" />
        </button>

        <h3 className="text-gray-50 text-xl">{task.title}</h3>

        <Link to={"/form-editar-tarea"}>
          <PencilSquareIcon className="w-8 h-8 text-gray-50" />
        </Link>
      </div>

      {/* Descripción de la tarea */}
      <p className="text-gray-200">{task.description}</p>

      {/* Fecha de creacion */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          <span className="text-gray-50">Fecha de creacion:</span>
        </div>
        <span className="bg-gray-500 w-28 h-9 text-center py-2 rounded">
          14/08/2024
        </span>
      </div>

      {/* Categoria de la tarea */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <TagIcon className="w-5 h-5" />
          <span className="text-gray-50">Categoria:</span>
        </div>
        <div className="bg-university flex justify-center items-center w-28 h-9 text-center rounded">
          <AcademicCapIcon className="w-5 h-5" />
          <span>Universidad</span>
        </div>
      </div>
    </div>
  );
}

export default CardTask;
