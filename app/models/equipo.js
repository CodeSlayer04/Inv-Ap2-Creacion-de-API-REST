const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Equipo = sequelize.define('Equipo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'equipos',
  timestamps: false, 
});

module.exports = Equipo;
