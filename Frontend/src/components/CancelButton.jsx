import { Link } from "react-router-dom";
const CancelButton = () => {
  return (
    <Link
      to={"/home"}
      className="bg-gray-700 text-center w-1/2 text-violet-400 px-4 py-2 rounded hover:bg-red-400 hover:text-red-700 transition-colors"
    >
      Cancelar
    </Link>
  );
};

export default CancelButton;
