import { getToken } from "./auth";

//obtener tareas de x usuario, {pasa el token, el id se deduce en el back}
export const fetchTasks = async () => {
  try {
    const token = getToken(); // Obtener el token desde el almacenamiento local
    if (!token) {
      throw new Error("No se encontró un token de autenticación");
    }

    const response = await fetch("http://localhost:5000/api/tareas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Enviar el token en la cabecera
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }

    const tasks = await response.json();
    console.log("Tareas obtenidas:", tasks); //borrar/comentar despues
    return tasks;
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    throw error;
  }
};

const formatDateForMySQL = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const addTask = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    category_id: parseInt(data.get("category")),
    status: "pendiente",
    due_date: formatDateForMySQL(new Date()),
  };

  try {
    const token = getToken(); // Obtener el token desde el almacenamiento local
    if (!token) {
      throw new Error("No se encontró un token de autenticación");
    }

    const response = await fetch("http://localhost:5000/api/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Incluir el token en los encabezados de autorización
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      console.log(response)
      throw new Error("Error al agregar la tarea");
    }

    const result = await response.json();
    console.log("Tarea agregada:", result);
    window.location.href = "/home";
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
    due_date: new Date().formatDateForMySQL(new Date()),
  };

  try {
    const response = await fetch("http://localhost:5000/api/tareas", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Error al agregar la tarea");
    }

    const result = await response.json();

    window.location.href = "/home";

    console.log("Tarea agregada:", result);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tareas/${id}`, {
      method: "DELETE",
      Authorization: `Bearer ${token}`,
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