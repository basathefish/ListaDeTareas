import FormTask from "../components/Form";
import { useParams } from "react-router-dom";
import useGetTask from "../hooks/useGetTask";
const EditTask = () => {

  // Obtener el id de la tarea a editar
  const { id } = useParams();
  const idTask = parseInt(id);
  // Obtener la tarea a editar
  const { task } = useGetTask(idTask);

  return (
    <div className="bg-gray-950 absolute flex justify-center items-center w-full h-full bg-opacity-70 p-4">
      <FormTask task={task} />
    </div>
  );
};

export default EditTask;
