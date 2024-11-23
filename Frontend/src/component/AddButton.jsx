import React from "react";
import { PlusIcon } from '@heroicons/react/24/solid';

export const AddButton = ({ className, onClick }) => {
  return (
    <div className={`relative w-[451px] h-[99px] ${className}`}>
      <div className="absolute w-[451px] -top-px left-0 [font-family:'Lato-Regular',Helvetica] font-normal text-portage text-xl text-center tracking-[0] leading-[30.1px] whitespace-nowrap">
        Añadir
      </div>

      {/* Botón clickeable */}
      <button
        className="absolute w-16 h-16 top-[35px] left-[194px] bg-violet-500 rounded-full flex items-center justify-center border-4 border-violet-700"
        onClick={onClick} // Manejador de eventos onClick
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};
