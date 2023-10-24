const { Router } = require('express');

const router = Router();

const { getPrestacion, getPrestaciones } = require('../controllers/prestaciones.controller');

router.get('/prestaciones/getPrestaciones', getPrestaciones);
router.get('/prestaciones/getPrestacion/:id', getPrestacion);

module.exports = router;