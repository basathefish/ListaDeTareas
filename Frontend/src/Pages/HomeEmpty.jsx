import React, { useState } from "react"; 
import { Head } from "../component/Head";
import { Sort } from "../component/Sort";
import Checklist from "../assets/Images/checklist.svg"; 
import { AddButton } from "../component/AddButton"; 
import FormDeAgregar from "./FormDeAgregar"; 

export const HomeEmpty = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del formulario

  // Función para abrir el formulario
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el formulario
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#121212] flex flex-col items-center w-full">
      <div className="bg-[#121212] w-[1280px] h-[832px] relative flex flex-col items-center">
        {/* Header Section */}
        <div className="flex w-full items-center justify-between absolute top-0 left-3.5 p-4">
          <div className="relative w-[46.54px] h-[42px]">
            <Sort className="!left-2.5 !top-[9px]" />
          </div>

          <Head className="!w-[184.77px]" />
          <div className="relative w-[46.54px] h-[42px]" />
        </div>

        {/* Botón de añadir tarea */}
        <div className="absolute top-[130px] left-[50%] transform -translate-x-1/2">
          <AddButton onClick={openModal} />
        </div>

        {/* Modal con Formulario de Agregar */}
        {isModalOpen && (
          <FormDeAgregar />
        )}

        {/* Imagen de checklist */}
        <div className="absolute w-[455px] h-[507px] top-[232px] left-[415px]">
          <img
            className="absolute w-[379px] h-[382px] top-0 left-[35px]"
            alt="Checklist"
            src={Checklist}
          />

          {/* Títulos y texto */}
          <div className="absolute w-[451px] top-[399px] left-0 [font-family:'Lato-Regular',Helvetica] font-normal text-portage text-xl text-center tracking-[0] leading-[30.1px]">
            ¿Qué quieres hacer hoy?
          </div>

          <p className="absolute w-[265px] top-[467px] left-[92px] [font-family:'Lato-Regular',Helvetica] font-normal text-portage text-base text-center tracking-[0] leading-[24.1px]">
            Toca + para añadir tu tarea
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeEmpty;
