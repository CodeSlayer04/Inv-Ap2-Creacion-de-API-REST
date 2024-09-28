const express = require('express');
const Jugador = require('../models/jugador');
const router = express.Router();

// Crear jugador
router.post('/', async (req, res) => {
  const { nombre, equipo_id } = req.body;
  try {
    const nuevoJugador = await Jugador.create({ nombre, equipo_id });
    res.status(201).json(nuevoJugador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los jugadores
router.get('/', async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    res.json(jugadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar jugador
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, equipo_id } = req.body;
  try {
    await Jugador.update({ nombre, equipo_id }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar jugador
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Jugador.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
