const express = require('express');
const router = express.Router();
const db = require('../config/db');

//obtener todos los usuarios
router.get('/', (req, res) => {
    const query = 'SELECT * FROM User';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//crear un nuevo usuario
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO User (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, name, email });
    });
});

//actualizar un usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const query = 'UPDATE User SET name = ?, email = ?, password = ? WHERE id = ?';
    db.query(query, [name, email, password, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User updated' });
    });
});

//eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM User WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User deleted' });
    });
});

module.exports = router;
