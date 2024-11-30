import {
  CheckCircleIcon,
  PencilSquareIcon,
  ClockIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { categories } from "../utils/categories";

function CardTask({ task }) {

  const completeTask = () => {
    console.log("Tarea completada");
  };

  return (
    <div className="bg-gray-700 w-full md:w-[360px] p-4 rounded-xl flex flex-col justify-between gap-3">
      {/* Nombre de la tarea */}
      <div className="flex justify-between items-center w-full">
        {/* Boton para marcar como completada */}
        <button onClick={completeTask}>
          <CheckCircleIcon className="w-8 h-8 text-gray-50" />
        </button>

        <h3 className="text-gray-50 text-xl">{task.title}</h3>

        <Link to={`/form-editar-tarea/${task.id}`}>
          <PencilSquareIcon className="w-8 h-8 text-gray-50" />
        </Link>
      </div>

      {/* Descripción de la tarea */}
      <p className="text-gray-200">{task.description}</p>

      {/* Fecha de creacion */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          <span className="text-gray-50">Fecha de creación:</span>
        </div>
        <span className="bg-gray-500 w-28 h-9 text-center py-2 rounded">
          {task.due_date.split("T")[0]}
        </span>
      </div>

      {/* Categoria de la tarea */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <TagIcon className="w-5 h-5" />
          <span className="text-gray-50">Categoría:</span>
        </div>
        <div className={`bg-${categories[task.category_id].color} flex justify-center items-center w-28 h-9 text-center rounded`}>
          {categories[task.category_id].icon} 
          <span>{categories[task.category_id].name}</span>
        </div>
      </div>

      {/* Boton para ELIMINAR la tarea */}
      <Link
        to={`/eliminar-tarea/${task.id}`}
        className="flex justify-center items-center w-full h-9 rounded-md text-red-500 font-light"
      >
        <TrashIcon className="w-5 h-5" />
        Eliminar
      </Link>
    </div>
  );
}

export default CardTask;
