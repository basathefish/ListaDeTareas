import FormTask from "../components/Form";
import { useParams } from "react-router-dom";
const EditTask = () => {

  // Obtener el id de la tarea a editar
  const { id } = useParams();

  // Obtener la tarea a editar
  const task = {
    id: 1,
    title: "Tarea de Matemáticas",
    description: "Resolver los ejercicios del 1 al 10 de la página 50",
    category: "university",
  };

  return (
    <div className="bg-gray-950 absolute flex justify-center items-center w-full h-full bg-opacity-70 p-4">
      <FormTask task={task} />
    </div>
  );
};

export default EditTask;
