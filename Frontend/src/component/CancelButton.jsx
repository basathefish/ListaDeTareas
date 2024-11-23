import React from "react";

const CancelButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick} // Llama a la función para cerrar el modal
      className="delete-button flex items-center text-white px-4 py-2 w-1/2 mr-2 border-none"
    >
      Cancelar
    </button>
  );
};

export default CancelButton;
