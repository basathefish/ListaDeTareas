import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

export const AddButton = () => {
  return (
    <>
      <h2 className="text-xl text-gray-50 mb-1">Añadir</h2>
      {/* Link que redirige a la ruta /form-agregar */}
      <Link
        to="/form-agregar"
        className="bg-violet-400 rounded-full w-16 h-16 flex justify-center items-center hover:bg-violet-500 hover:scale-110 transition duration-300 ease-in-out"
        aria-label="Añadir nuevo elemento"
        tabIndex={0}
        role="button"
      >
        <PlusIcon className="w-8 h-8 text-gray-50" />
      </Link>
    </>
  );
};
