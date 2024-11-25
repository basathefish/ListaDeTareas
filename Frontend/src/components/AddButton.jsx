import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

export const AddButton = () => {
  return (
    <>
      <h2 className="text-xl text-gray-50 mb-1">Añadir</h2>
      {/* Link que redirige a la ruta /form-agregar */}
      <Link
        to="/form-agregar"
        className="bg-violet-400 rounded-full w-16 h-16 flex justify-center items-center hover:bg-violet-500 transition duration-300 ease-in-out"
      >
        <PlusIcon className="w-8 h-8 text-gray-50" />
      </Link>
    </>
  );
};
