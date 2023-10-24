const { Router } = require('express');

const router = Router();

const { getCategorias } = require('../controllers/categorias.controller');

router.get('/categorias/getCategorias', getCategorias);

module.exports = router;