const express = require('express');
const Partido = require('../models/partido');
const router = express.Router();

// Crear partido
router.post('/', async (req, res) => {
  const { equipo_local, equipo_visitante, fecha } = req.body;
  try {
    const nuevoPartido = await Partido.create({ equipo_local, equipo_visitante, fecha });
    res.status(201).json(nuevoPartido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los partidos
router.get('/', async (req, res) => {
  try {
    const partidos = await Partido.findAll();
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar partido
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { equipo_local, equipo_visitante, fecha } = req.body;
  try {
    await Partido.update({ equipo_local, equipo_visitante, fecha }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar partido
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Partido.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
