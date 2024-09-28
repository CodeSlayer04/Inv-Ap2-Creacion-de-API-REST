const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Resultado = sequelize.define('Resultado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  partido_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'partidos', // nombre de la tabla
      key: 'id',
    },
  },
  goles_local: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  goles_visitante: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'resultados',
  timestamps: false,
});

module.exports = Resultado;
