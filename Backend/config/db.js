const mysql = require('mysql2');

//conexión con base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lista_de_tareas'
});

//verificar la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.stack);
        return;
    }
    console.log('Conexión exitosa con la base de datos.');
});

module.exports = connection;
