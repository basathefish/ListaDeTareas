const bcrypt = require('bcrypt'); //encript
const jwt = require('jsonwebtoken'); //token
const db = require('../config/db');
const { SECRET_KEY } = require('../middleware/verifyToken');

//Registrar nuevo usuario
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //email es pk
        const [existingUser] = await db.promise().query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.promise().query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [
            name,
            email,
            hashedPassword,
        ]);

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

//Loggear usuario
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.promise().query('SELECT * FROM user WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const user = rows[0];

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);

        res.status(200).json({ message: 'Login exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

//Obtener perfil del usuario
exports.profile = async (req, res) => {
    const userId = req.user.id;
    const query = 'SELECT * FROM User WHERE id = ?';
    
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(results[0]);
    });
};
