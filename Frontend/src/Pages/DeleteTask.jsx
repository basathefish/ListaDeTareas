import React from "react";


const DeleteTask = ({ /*isOpen, */ onClose, onDelete, taskTitle }) => {
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1C1C1C] text-white p-6 rounded-lg shadow-lg w-[300px]">
        {/* Header del Modal */}
        <h2 className="text-portage font-semibold mb-4 text-center">Delete Task</h2>

        {/* Línea divisoria */}
        <hr className="border-[#3E3E3E] mb-4" />

        {/* Contenido */}
        <p className="text-sm text-center mb-2 text-portage">
          ¿Quiere eliminar esta tarea?
        </p>
        <p className="text-sm text-center text-gray-400">
          Título: {taskTitle}
        </p>

        {/* Botones */}
        <div className="flex justify-between mt-6">
          <button
            className="text-[#8675FF] text-sm hover:underline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#8675FF] text-white text-sm font-semibold rounded-lg hover:bg-[#6C5BD6]"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
