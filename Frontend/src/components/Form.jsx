import { TagIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import CancelButton from "./CancelButton";
import { categories } from "../utils/categories";
import { useAddTask } from "../hooks/useAddTask";
import { useEditTask } from "../hooks/useEditTask";

function FormTask({ task }) {
  const { title, description, category_id } = task ? task : {};
  const { addTask } = useAddTask();
  const { editTask } = useEditTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newTask = Object.fromEntries(data.entries());
    const date = new Date();

    const task = {
      title: newTask.title,
      description: newTask.description,
      category_id: parseInt(newTask.category),
      status: "pendiente",
      user_id: 1,
      due_date: date.toISOString(),
    };

    if (task) {
      if (task.id) {
        editTask(task);
      } else {
        addTask(task);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 text-gray-50 flex flex-col px-4 py-5 rounded-md w-full sm:w-96 h-[500px] gap-5"
    >
      {/* Título de la Tarea */}
      <label htmlFor="title" className="text-xl font-bold">
        Título de la Tarea
      </label>

      <input
        id="title"
        type="text"
        name="title"
        defaultValue={title}
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Título de la Tarea"
        required
      />

      {/* Descripción de la Tarea */}
      <label htmlFor="title" className="text-xl font-bold">
        Descrición de la Tarea
        <textarea
          id="description"
          type="text"
          name="description"
          defaultValue={description}
          className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none resize-none h-40"
          placeholder="Descripcion de la Tarea"
          required
        ></textarea>
      </label>

      {/* Categoría de la Tarea */}
      <div className="relative">
        <label htmlFor="category" className="text-xl font-bold">
          Categoría
        </label>
        <select
          id="category"
          name="category"
          defaultValue={category_id}
          className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        >
          <option value="">Seleccionar categoria</option>
          {categories.map((category) => (
            <option key={category.name} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <TagIcon className="bg-gray-600 h-6 w-6 absolute right-0 top-1/2 transform -translate-y-0 text-violet-400" />
      </div>

      {/* Botones para cancelar y agregar tarea */}
      <div className="flex gap-5 justify-between">
        <CancelButton />
        <button
          type="submit"
          className="flex justify-center items-center w-1/2 bg-violet-400 px-4 py-2 rounded hover:bg-violet-500 transition-colors"
        >
          {task ? "Editar Tarea" : "Agregar Tarea"}
          <PaperAirplaneIcon className="h-6 w-6 ml-2 text-violet-700" />
        </button>
      </div>
    </form>
  );
}

export default FormTask;