const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api/tareas', require('./routes/taskRoutes')); //ruta para las tareas
app.use('/api/usuarios', require('./routes/userRoutes')); //ruta para los usuarios
app.use('/api/categorias', require('./routes/categoryRoutes')); //ruta para las categorías

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
