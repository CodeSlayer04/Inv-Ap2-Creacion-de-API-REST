const express = require('express');
const Equipo = require('../models/equipo');
const router = express.Router();

// Crear equipo
router.post('/', async (req, res) => {
  const { nombre, ciudad } = req.body;
  try {
    const nuevoEquipo = await Equipo.create({ nombre, ciudad });
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los equipos
router.get('/', async (req, res) => {
  try {
    const equipos = await Equipo.findAll();
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar equipo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, ciudad } = req.body;
  try {
    await Equipo.update({ nombre, ciudad }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar equipo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Equipo.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
  