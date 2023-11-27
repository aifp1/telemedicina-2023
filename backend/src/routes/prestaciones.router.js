const { Router } = require('express');

const router = Router();

const { getPrestacion, getPrestaciones, addPrestacion, deletePrestacion } = require('../controllers/prestaciones.controller');

router.get('/prestaciones/getPrestaciones', getPrestaciones);
router.get('/prestaciones/getPrestacion/:id', getPrestacion);
router.post('/prestaciones/addPrestacion', addPrestacion);
router.delete('/prestaciones/deletePrestacion/:id', deletePrestacion);

module.exports = router;