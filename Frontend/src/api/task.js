export const fetchTasks = async (user_id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tareas?user_id=${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }

    const tasks = await response.json();
    console.log("Tareas obtenidas:", tasks);
    return tasks;
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    throw error;
  }
};

export const addTask = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    category_id: parseInt(data.get("category")),
    status: "pendiente",
    user_id: 1,
    due_date: new Date().toISOString(),
  };

  try {
    const response = await fetch("http://localhost:5000/api/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Error al agregar la tarea");
    }

    const result = await response.json();
    console.log("Tarea agregada:", result);
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};

export const editTask = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    category_id: parseInt(data.get("category")),
    user_id: 1,
    due_date: new Date().toISOString(),
  };

  try {
    const response = await fetch("http://localhost:5000/api/tareas", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Error al agregar la tarea");
    }

    const result = await response.json();

    window.location.href = "/";

    console.log("Tarea agregada:", result);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tareas/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la tarea");
    }

    window.location.href = "/";
    console.log("Tarea eliminada:", id);
  } catch (error) {
    console.error(error);
  }
};