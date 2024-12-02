const express = require("express");
const router = express.Router();
const db = require("../config/db");
const {verifyToken} = require("../middleware/verifyToken");

//obtener todas las tareas
router.get("/all", (req, res) => {
  const query = "SELECT * FROM Task";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener las tareas:", err);
      return res.status(500).send("Error al obtener las tareas");
    }
    res.json(results);
  });
});

//obtener todas las tareas de x usuario
router.get("/", verifyToken, (req, res) => {
  const user_id = req.user.id;

  const query = "SELECT * FROM Task WHERE user_id = ?";

  db.query(query, [user_id], (err, results) => {
    if (err) {
      console.error("Error al obtener las tareas:", err);
      return res.status(500).json({ message: "Error al obtener las tareas" });
    }

    res.json(results);
  });
});

//obtener una tarea por su id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM Task WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error al obtener la tarea:", err);
      return res.status(500).send("Error al obtener la tarea");
    }
    if (results.length === 0) {
      return res.status(404).send("Tarea no encontrada");
    }
    res.json(results[0]);
  });
});

//agregar una nueva tarea
router.post("/", verifyToken, (req, res) => {
  const { title, description, status, due_date, category_id } = req.body;
  const user_id = req.user.id; //Extraer user_id del token procesado por el middleware

  const query = `
    INSERT INTO Task (title, description, status, due_date, user_id, category_id)
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [title, description, status, due_date, user_id, category_id],
    (err, result) => {
      if (err) {
        console.error("Error al agregar tarea:", err);
        return res.status(500).send({ message: "Error al agregar tarea" });
      }
      res.status(201).json({ message: "Tarea agregada con éxito" });
    }
  );
});


//actualizar una tarea
router.put("/:id", verifyToken, (req, res) => {
  const { id } = req.params; // ID de la tarea
  const { title, description, status, due_date, category_id } = req.body;
  const user_id = req.user.id; // ID del usuario autenticado

  console.log("ID de la tarea a editar:", id);
  console.log("Datos recibidos para actualizar:", req.body);

  const query = `
    UPDATE Task
    SET title = ?, description = ?, status = ?, due_date = ?, category_id = ?
    WHERE id = ? AND user_id = ?`;

  db.query(
    query,
    [title, description, status, due_date, category_id, id, user_id],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar la tarea:", err);
        return res.status(500).json({ message: "Error al actualizar la tarea" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Tarea no encontrada o no autorizada para actualizar",
        });
      }

      res.status(200).json({ message: "Tarea actualizada con éxito" });
    }
  );
});

//eliminar una tarea
router.delete("/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM Task WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar la tarea:", err);
      return res.status(500).send("Error al eliminar la tarea");
    }
    res.send("Tarea eliminada con éxito");
  });
});

module.exports = router;
