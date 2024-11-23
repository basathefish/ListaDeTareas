import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Icono para cerrar el modal

const categories = [
  { name: "Trabajo", color: "work", icon: "💼" },
  { name: "Universidad", color: "university", icon: "🎓" },
  { name: "Deportes", color: "sport", icon: "⚽" },
  { name: "Diseño", color: "design", icon: "🎨" },
  { name: "Social", color: "social", icon: "📱" },
  { name: "Música", color: "music", icon: "🎵" },
  { name: "Salud", color: "health", icon: "💪" },
  { name: "Películas", color: "movie", icon: "🎬" },
  { name: "Hogar", color: "home", icon: "🏠" },
];

const TagModal = ({ onClose, onCategorySelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1C1C1C] text-white p-6 rounded-lg shadow-lg w-80">
        {/* Header del modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Seleccionar Categoría</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
          </button>
        </div>

        {/* Lista de categorías con texto claro */}
        <ul className="space-y-2 text-white">
          {categories.map((category) => {
            const bgColorClass = `bg-${category.color}`; 
            return (
              <li
                key={category.name}
                className={`flex items-left gap-10 px-4 py-2 rounded-md cursor-pointer ${bgColorClass} hover:bg-opacity-80`}
                onClick={() => {
                  onCategorySelect(category); // Pasa la categoría seleccionada
                  onClose(); // Cerrar el modal después de seleccionar
                }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm">{category.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TagModal;
