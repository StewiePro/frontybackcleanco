const mysql = require('mysql');

// Obtener todas las rutas
exports.obtenerRutas = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emmanuel0415#%',
    database: 'bd_cleanco_react'
  });

  connection.query('SELECT * FROM rutas', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener las rutas');
    } else {
      res.json(results);
    }
    connection.end();
  });
};