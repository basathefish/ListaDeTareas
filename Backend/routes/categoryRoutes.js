const express = require('express');
const router = express.Router();
const db = require('../config/db');

//obtener todas las categorías
router.get('/', (req, res) => {
    const query = 'SELECT * FROM Category';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//crear una nueva categoría
router.post('/', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO Category (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, name });
    });
});

//actualizar una categoría
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const query = 'UPDATE Category SET name = ? WHERE id = ?';
    db.query(query, [name, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Category updated' });
    });
});

//eliminar una categoría
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Category WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Category deleted' });
    });
});

module.exports = router;
