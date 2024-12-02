const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(cors());
app.use(express.json());

//rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/tareas', taskRoutes);
app.use('/api/categorias', categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
