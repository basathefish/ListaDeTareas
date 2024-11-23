import React from "react";
import Tag from "../component/Tag";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import '../index.css';

export const FormDeEditarTarea = () => {
  return (
    <main className="bg-[#121212] flex items-center justify-center w-full h-screen">
      <section className="bg-[#000000b2] flex items-center justify-center w-full h-full">
        <div className="bg-[#1C1C1C] rounded-[20px] p-6 w-[400px]">
          {/* Título */}
          <label className="block mb-6">
            <span className="block font-bold text-gray-300 text-lg mb-2">
              Título
            </span>
            <input
              type="text"
              placeholder="Título de tarea 1"
              className="w-full px-4 py-2 rounded-lg border border-[#979797] bg-[#121212] text-gray-300 text-base"
            />
          </label>

          {/* Descripción */}
          <label className="block mb-6">
            <span className="block font-bold text-gray-300 text-lg mb-2">
              Descripción
            </span>
            <textarea
              placeholder="Descripción de la tarea 1"
              className="w-full px-4 py-2 h-[100px] rounded-lg border border-[#979797] bg-[#121212] text-gray-300 text-base resize-none"
            />
          </label>

          {/* Categoría */}
          <label className="block mb-6">
            <span className="block font-bold text-gray-300 text-lg mb-2">
              Categoría
            </span>
            <div className="flex items-center px-4 py-2 rounded-lg border border-[#979797] bg-[#121212]">
              <Tag category="Universidad" categoryColor="university" />
            </div>
          </label>

          {/* Botones */}
          <div className="flex justify-between">
            <button className="text-gray-300 text-secondary hover:underline">
              Cancel
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#5F5FFF] text-portage text-base rounded-lg hover:bg-[#4B4BD6]">
              <span>Editar</span>
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormDeEditarTarea;
