import React, { useState } from "react";
import {
  CheckCircleIcon,
  PencilIcon,
  ClockIcon,
  TrashIcon,
  TagIcon,
} from "@heroicons/react/24/outline"; 
import Tag from "./Tag"; 

export const TareaCard = ({ className, isCompleted, onDelete }) => {
  // Estado para el modo de edición
  const [isEditing, setIsEditing] = useState(false);
  
  // Estados para los campos de la tarea
  const [title, setTitle] = useState("Título de la Tarea 1");
  const [description, setDescription] = useState("Descripción de la tarea 1");
  const [date, setDate] = useState("14 / 08 / 2024");
  const [selectedCategory, setSelectedCategory] = useState("Seleccionar Categoría");

  // Función para activar el modo de edición
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Función para guardar los cambios y salir del modo de edición
  const handleSaveChanges = () => {
    setIsEditing(false);
   
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
  };

  // Función para alternar el estado completado de la tarea
  const handleToggleComplete = () => {
    // Aquí puedes manejar el estado completado de la tarea.
    // Por ejemplo, actualizar el estado de la tarea a completada o pendiente.
    console.log('Tarea completada: ', !isCompleted); // Solo como ejemplo, esto es para ver el cambio.
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${className}`} style={{ top: "100px" }}>
      <div className="flex flex-col w-[376px] p-6 bg-[#1a1a1a] rounded-lg shadow-lg text-white">
        {/* Header (Checkbox, Title, Edit Icon) */}
        <div className="flex items-center justify-between mb-4">
          <button
            className={`w-6 h-6 flex items-center justify-center ${isCompleted ? "text-green-500" : "text-gray-400"} hover:text-green-400`}
            onClick={handleToggleComplete}
          >
            <CheckCircleIcon className="w-6 h-6" />
          </button>
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 ml-4 text-lg font-semibold text-gray-300 bg-transparent border-b-2 border-gray-500 focus:outline-none"
            />
          ) : (
            <h2 className={`flex-1 ml-4 text-lg font-semibold text-gray-300 ${isCompleted ? "line-through text-gray-500" : "text-white"}`}>
              {title}
            </h2>
          )}
          <button
            className="w-6 h-6 flex items-center justify-center bg-transparent"
            onClick={handleEditClick}
          >
            <PencilIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
          </button>
        </div>

        {/* Description */}
        {isEditing ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-sm text-gray-400 mb-12 bg-transparent border-b-2 border-gray-500 focus:outline-none"
          />
        ) : (
          <p className="text-sm text-gray-400 mb-12">{description}</p>
        )}

        {/* Fecha de creación */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">Fecha de creación:</span>
          </div>
          <div className="px-3 py-1 bg-gray-700 rounded text-xs">{date}</div>
        </div>

        {/* Leyenda Categoría y Selector */}
        <div className="flex items-center mb-4">
          <TagIcon className="w-5 h-5 mr-2 text-gray-400" />
          <span className="text-sm text-gray-400 mr-16">Categoría:</span>
          <Tag
            category={selectedCategory}
            categoryColor="university"
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* Save or Cancel Buttons */}
        {isEditing && (
          <div className="flex justify-between mt-4">
            <button
              className="text-green-500 hover:text-green-400"
              onClick={handleSaveChanges}
            >
              Save
            </button>
            <button
              className="text-red-500 hover:text-red-400"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}

        {/* Delete Button */}
        {!isEditing && (
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center text-red-500 hover:text-red-400"
              onClick={onDelete} // Este es el "onDelete" que debe ser pasado como prop
            >
              <TrashIcon className="w-5 h-5 mr-2" />
              Delete Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TareaCard;
