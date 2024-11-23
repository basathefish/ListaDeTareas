import React, { useState } from "react";
import TagModal from "./TagModal"; 
import { ChevronDownIcon } from "@heroicons/react/24/outline"; 

const Tag = ({ category, categoryColor, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el modal

  const handleCategoryClick = () => {
    setIsOpen(!isOpen); // Abre o cierra el modal
  };

  // Establecer el color del botón en función de la categoría seleccionada
  const selectedColor = categoryColor || "work"; // Si no se selecciona categoría, se usa el color 'work'

  return (
    <div className="relative">
      <button
        onClick={handleCategoryClick}
        className={`flex items-left gap-8 px-4 py-2 rounded-md bg-${selectedColor} text-white`}
      >
        {category || "Seleccionar Categoría"}
        
        <ChevronDownIcon className="w-5 h-5" />
      </button>

      {/* Mostrar el modal de categorías si está abierto */}
      {isOpen && (
        <TagModal onClose={() => setIsOpen(false)} onCategorySelect={onCategorySelect} />
      )}
    </div>
  );
};

export default Tag;
