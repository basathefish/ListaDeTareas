import React, { useState } from "react";
import {
  CheckCircleIcon,
  PencilIcon,
  ClockIcon,
  TrashIcon,
  TagIcon,
} from "@heroicons/react/24/outline"; 
import Tag from "./src/component/Tag"; 

export const TareaCard = ({ className, onEdit, onDelete, onToggleComplete, isCompleted }) => {
  const [selectedCategory, setSelectedCategory] = useState("Seleccionar Categoría"); // Categoría seleccionada

  // Función que se pasa al componente Tag para seleccionar la categoría
  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name); // Actualiza la categoría seleccionada
  };

  return (
    <div
      className={`flex flex-col w-[376px] p-6 bg-[#1f1f1f] rounded-lg shadow-md text-white ${className}`}
    >
      {/* Header (Checkbox, Title, Edit Icon) */}
      <div className="flex items-center justify-between mb-4">
        {/* Checkbox */}
        <button
          className={`w-6 h-6 flex items-center justify-center ${
            isCompleted ? "text-green-500" : "text-gray-400"
          } hover:text-green-400`}
          onClick={onToggleComplete}
        >
          <CheckCircleIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2
          className={`flex-1 ml-4 text-lg font-semibold text-gray-300 ${
            isCompleted ? "line-through text-gray-500" : "text-white"
          }`}
        >
          Título de la Tarea 1
        </h2>

        {/* Edit Icon */}
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent"
          onClick={onEdit}
        >
          <PencilIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-12">
        Descripción de la tarea 1
      </p>

      {/* Fecha de creación */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 mr-2 text-gray-400" />
          <span className="text-sm text-gray-400">Fecha de creación:</span>
        </div>
        <div className="px-3 py-1 bg-gray-700 rounded text-xs">14 / 08 / 2024</div>
      </div>

          {/* Leyenda Categoría y Selector en el mismo renglón */}
      <div className="flex items-center mb-4">
        <TagIcon className="w-5 h-5 mr-2 text-gray-400" /> {/* Icono de categoría */}
        <span className="text-sm text-gray-400 mr-16">Categoría:</span> {/* Leyenda Categoría */}
        <Tag
          category={selectedCategory}
          categoryColor="university" // Usa el color de categoría seleccionado o predeterminado
          onCategorySelect={handleCategorySelect} // Pasamos la función handleCategorySelect
        />
      </div>

      {/* Delete Button */}
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center text-red-500 hover:text-red-400"
          onClick={onDelete}
        >
          <TrashIcon className="w-5 h-5 mr-2" />
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TareaCard;
