const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { verifyToken } = require('../middleware/verifyToken');

//Obtener todos los usuarios
router.get('/', (req, res) => {
    const query = 'SELECT * FROM User';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//Actualizar el perfil del usuario actual
router.put('/profile', verifyToken, (req, res) => {
    const userId = req.user.id;
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });

        const query = 'UPDATE User SET name = ?, email = ?, password = ? WHERE id = ?';
        db.query(query, [name, email, hashedPassword, userId], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Usuario actualizado' });
        });
    });
});

//Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM User WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Usuario eliminado' });
    });
});

module.exports = router;
