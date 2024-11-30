const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { verifyToken } = require('../middleware/verifyToken');
const userController = require('../controllers/userController');

//Obtener todos los usuarios
router.get('/', (req, res) => {
    const query = 'SELECT * FROM User';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//Registrar usuario
router.post('/register', userController.register);

//Login
router.post('/login', userController.login);

//Obtener el perfil del usuario actual
router.get('/profile', verifyToken, (req, res) => {
    const userId = req.user.id;
    const query = 'SELECT * FROM User WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(results[0]);
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
