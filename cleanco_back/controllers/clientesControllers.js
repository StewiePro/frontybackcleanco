const mysql = require('mysql');

// Obtener todos los clientes
exports.obtenerClientes = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emmanuel0415#%',
    database: 'bd_cleanco_react'
  });

  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los clientes');
    } else {
      res.json(results);
    }
    connection.end();
  });
};