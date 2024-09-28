const { Sequelize } = require('sequelize');

// configuración de mi base de datos
const sequelize = new Sequelize('torneo', 'root', 'root3026', { //credenciales de la base de datos
  host: 'localhost', //Nombre del host
  dialect: 'mysql', //base de datos
});

module.exports = sequelize;
