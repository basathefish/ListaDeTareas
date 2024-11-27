const express = require("express");
const router = express.Router();
const db = require("../config/db");

//obtener todas las tareas
router.get("/", (req, res) => {
  const query = "SELECT * FROM Task";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener las tareas:", err);
      return res.status(500).send("Error al obtener las tareas");
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
router.post("/", (req, res) => {
  const { title, description, status, due_date, user_id, category_id } =
    req.body;

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
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, status, due_date, user_id, category_id } =
    req.body;

  const query = `
    UPDATE Task
    SET title = ?, description = ?, status = ?, due_date = ?, user_id = ?, category_id = ?
    WHERE id = ?`;

  db.query(
    query,
    [title, description, status, due_date, user_id, category_id, id],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar la tarea:", err);
        return res
          .status(500)
          .send({ message: "Error al actualizar la tarea" });
      }
      res.send({ message: "Tarea actualizada con éxito" });
    }
  );
});

//eliminar una tarea
router.delete("/:id", (req, res) => {
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
