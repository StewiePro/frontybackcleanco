const mysql = require('mysql');

// Obtener todos los servicios
exports.obtenerServicios = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emmanuel0415#%',
    database: 'bd_cleanco_react'
  });

  connection.query('SELECT * FROM servicios', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los servicios');
    } else {
      res.json(results);
    }
    connection.end();
  });
};