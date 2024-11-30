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

        //hash pass and compare
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        //Genero token para devolver
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);

        res.status(200).json({ message: 'Login exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
