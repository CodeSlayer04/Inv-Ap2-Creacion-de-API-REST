const express = require('express');
const Resultado = require('../models/resultado');
const router = express.Router();

// Crear resultado
router.post('/', async (req, res) => {
  const { partido_id, goles_local, goles_visitante } = req.body;
  try {
    const nuevoResultado = await Resultado.create({ partido_id, goles_local, goles_visitante });
    res.status(201).json(nuevoResultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los resultados
router.get('/', async (req, res) => {
  try {
    const resultados = await Resultado.findAll();
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar resultado
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { partido_id, goles_local, goles_visitante } = req.body;
  try {
    await Resultado.update({ partido_id, goles_local, goles_visitante }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar resultado
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Resultado.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
