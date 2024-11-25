function ListEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img
        className="w-[450px] h-[450px] top-0 left-[35px]"
        alt="imagen de una lista de tareas vacia"
        src="./src/assets/images/checklist.png"
      />

      <p className="text-gray-50 text-xl">¿Qué quieres hacer hoy?</p>
      <p className="text-gray-50 text-base">Toca + para añadir tu tarea</p>
    </div>
  );
}

export default ListEmpty;
