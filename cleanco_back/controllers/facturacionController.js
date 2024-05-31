const mysql = require('mysql');

// Obtener todas las facturas
exports.obtenerFacturas = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emmanuel0415#%',
    database: 'bd_cleanco_react'
  });

  connection.query('SELECT * FROM facturas', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener las facturas');
    } else {
      res.json(results);
    }
    connection.end();
  });
};