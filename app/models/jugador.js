const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Jugador = sequelize.define('Jugador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  equipo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'equipos', // nombre de la tabla
      key: 'id',
    },
  },
}, {
  tableName: 'jugadores',
  timestamps: false,
});

module.exports = Jugador;
