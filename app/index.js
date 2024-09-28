const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');

const app = express();
app.use(bodyParser.json());

// Importar rutas
const equipoRoutes = require('./routes/equipo');
const jugadorRoutes = require('./routes/jugador');
const partidoRoutes = require('./routes/partido');
const resultadoRoutes = require('./routes/resultado');

// Usar rutas
app.use('/equipos', equipoRoutes);
app.use('/jugadores', jugadorRoutes);
app.use('/partidos', partidoRoutes);
app.use('/resultados', resultadoRoutes);

// Conectar a la base de datos y iniciar el servidor
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}).catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});
  