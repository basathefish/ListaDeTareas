import React, { useState } from 'react';
import FormDeAgregar from '../Pages/FormDeAgregar';
import CancelButton from './CancelButton';

const ModalController = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    console.log('Modal cerrado');
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Abrir Modal
      </button>

            {isModalOpen && (
        <div className="modal-background">
          <div className="modal-content">
            <FormDeAgregar onCancel={closeModal} />
            <CancelButton onClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalController;
