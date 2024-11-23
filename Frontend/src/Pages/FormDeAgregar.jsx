import React, { useState, useEffect } from "react";
import { CheckCircleIcon, PencilIcon, ClockIcon, TrashIcon, TagIcon } from "@heroicons/react/24/outline"; 
import Tag from "../component/Tag";

export const FormDeAgregar = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState("Título de la Tarea");
  const [description, setDescription] = useState("Descripción de la tarea");
  const [date, setDate] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("Seleccionar Categoría");

   // Establecer la fecha por defecto al día de hoy
   useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; 
    setDate(today);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    onAdd({ title, description, date, category: selectedCategory });
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <form onSubmit={handleAddTask}>
          {/* Título de la Tarea */}
          <div className="modal-header mb-4">
            <label htmlFor="title" className="text-sm text-gray-300 mb-2 block">Título de la Tarea</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              className="modal-title bg-gray-800 border-none text-lg font-semibold text-gray-300 outline-none w-full p-2"
            />
          </div>

          {/* Descripción de la Tarea */}
          <div className="mb-4">
            <label htmlFor="description" className="text-sm text-gray-300 mb-2 block">Descripción de la tarea</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} 
              className="modal-description bg-gray-800 border-none text-sm text-gray-400 outline-none resize-none w-full p-2"
              placeholder="Descripción de la tarea"
              rows={5} 
            />
          </div>

          {/* Fecha de creación */}
          <div className="modal-footer mb-4">
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-sm text-gray-400">Fecha de creación:</span>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} 
              className="px-3 py-1 bg-gray-700 rounded text-xs text-white w-full"
            />
          </div>

          {/* Categoría de la Tarea */}
          <div className="modal-footer mb-4">
            <div className="category flex items-center">
              <TagIcon className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-sm text-gray-400 mr-16">Categoría:</span>
              <Tag
                category={selectedCategory}
                categoryColor="university"
                onCategorySelect={handleCategorySelect}
              />
            </div>
          </div>

          {/* Botones para cancelar y agregar tarea */}
          <div className="modal-footer flex justify-between">
            <button
              type="button"
              onClick={onCancel} 
              className="delete-button flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 w-1/2 mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="delete-button flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 w-1/2"
            >
              Agregar Tarea
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormDeAgregar;
