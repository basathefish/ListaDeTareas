import React, { useState } from "react";
import {
  CheckCircleIcon,
  PencilSquareIcon,
  ClockIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { updateTask, formatDateForMySQL } from "../api/task";
import { categories } from "../utils/categories";

function CardTask({ task, onTaskUpdated }) {
  const [status, setStatus] = useState(task.status); 

  const completeTask = async () => {
    try {
      // Crear un objeto con todos los campos de la tarea, pero solo actualizar el "status".
      const updatedData = {
        title: task.title, 
        description: task.description, 
        status: status === "pendiente" ? "completada" : "pendiente",
        due_date:  formatDateForMySQL(task.due_date), 
        user_id: task.user_id, 
        category_id: task.category_id, 
      };

      // Llamar a la API para actualizar la tarea con todos los datos, solo actualizando el "status"
      await updateTask(task.id, updatedData);

      // Actualizar el estado local de la tarea
      setStatus(updatedData.status);

      if (onTaskUpdated) onTaskUpdated();
    } catch (error) {
      console.error("Error al completar la tarea:", error);
    }
  };

  return (
    <div
      className={`bg-gray-700 w-full md:w-[360px] p-4 rounded-xl flex flex-col justify-between gap-3 ${
        status === "completada" ? "bg-green-950 opacity-80" : ""
      }`}
      aria-labelledby={`task-title-${task.id}`}
    >
      {/* Nombre de la tarea */}
      <div className="flex justify-between items-center w-full">
        {/* Botón para marcar como completada */}
        <button
          onClick={completeTask}
          aria-label={status === "completada" ? "Marcar tarea como pendiente" : "Marcar tarea como completada"}
        >
          <CheckCircleIcon
            className={`w-8 h-8 ${status === "completada" ? "text-green-300" : "text-gray-50"}`}
            aria-hidden="true"
          />
        </button>

        <h3
          id={`task-title-${task.id}`}
          className={`text-xl ${status === "completada" ? "line-through text-gray-400" : "text-gray-50"}`}
        >
          {task.title}
        </h3>

        <Link
          to={`/form-editar-tarea/${task.id}`}
          aria-label="Editar tarea"
        >
          <PencilSquareIcon className="w-8 h-8 text-gray-50" aria-hidden="true" />
        </Link>
      </div>

      {/* Descripción de la tarea */}
      <p className={`text-gray-200 ${status === "completada" ? "line-through" : ""}`}>
        {task.description}
      </p>

      {/* Fecha de creación */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5" aria-hidden="true" />
          <span className="text-gray-50">Fecha de creación:</span>
        </div>
        <span className="bg-gray-500 w-28 h-9 text-center py-2 rounded">
          {task.due_date.split("T")[0]}
        </span>
      </div>

      {/* Categoría de la tarea */}
      <div className="flex justify-between items-center text-gray-50">
        <div className="flex items-center gap-2">
          <TagIcon className="w-5 h-5" aria-hidden="true" />
          <span className="text-gray-50">Categoría:</span>
        </div>
        <div
          className={`bg-${categories[task.category_id-1].color} flex justify-center items-center w-28 h-9 text-center rounded`}
          aria-label={`Categoría: ${categories[task.category_id-1].name}`}
        >
          {categories[task.category_id-1].icon}
          <span>{categories[task.category_id-1].name}</span>
        </div>
      </div>

      {/* Botón para ELIMINAR la tarea */}
      <Link
        to={`/eliminar-tarea/${task.id}`}
        className="flex justify-center items-center w-full h-9 rounded-md text-red-300 font-light"
        aria-label="Eliminar tarea"
      >
        <TrashIcon className="w-5 h-5" aria-hidden="true" />
        Eliminar
      </Link>
    </div>
  );
}

export default CardTask;
