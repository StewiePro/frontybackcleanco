const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Emmanuel0415#%',
  database: 'bd_cleanco_react'
});

// Importar controladores
const serviciosController = require('./controllers/serviciosController');
const facturacionController = require('./controllers/facturacionController');
const clientesController = require('./controllers/clientesController');
const colaboradoresController = require('./controllers/colaboradoresController');
const rutasController = require('./controllers/rutasController');

// Definir rutas
app.get('/api/servicios', serviciosController.obtenerServicio);
app.post('/api/servicios', serviciosController.crearServicio);
app.put('/api/servicios', serviciosController.modificarServicio);
app.delete('/api/servicios', serviciosController.borrarServicio);

app.get('/api/facturacion', facturacionController.obtenerFacturacion);
app.post('/api/facturacion', facturacionController.creaFacturacion);
app.put('/api/facturacion', facturacionController.modificaFacturacion);
app.delete('/api/facturacion', facturacionController.borraFacturacion);

app.get('/api/clientes', clientesController.obtenerClienetes);
app.post('/api/clientes', clientesController.creaClienetes);
app.put('/api/clientes', clientesController.modificaClienetes);
app.delete('/api/clientes', clientesController.borraClienetes);

app.get('/api/colaboradores', colaboradoresController.obtenerColaboradores);
app.post('/api/colaboradores', colaboradoresController.creaColaboradores);
app.put('/api/colaboradores', colaboradoresController.modificaColaboradores);
app.delete('/api/colaboradores', colaboradoresController.borraColaboradores);

app.get('/api/rutas', rutasController.obtenerRutas);
app.post('/api/rutas', rutasController.creaRutas);
app.put('/api/rutas', rutasController.modificaRutas);
app.delete('/api/rutas', rutasController.borraRutas);


app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});