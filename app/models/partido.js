const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Partido = sequelize.define('Partido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  equipo_local: {
    type: DataTypes.INTEGER,
    references: {
      model: 'equipos', // nombre de la tabla
      key: 'id',
    },
  },
  equipo_visitante: {
    type: DataTypes.INTEGER,
    references: {
      model: 'equipos', // nombre de la tabla
      key: 'id',
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'partidos',
  timestamps: false,
});

module.exports = Partido;
