const { Router } = require('express');

const router = Router();

const { getCategorias, getCategoria, addCategoria, deleteCategoria } = require('../controllers/categorias.controller');

router.get('/categorias/getCategorias', getCategorias);
router.get('/categorias/getCategoria/:id', getCategoria);
router.post('/categorias/addCategoria', addCategoria);
router.delete('/categorias/deleteCategoria/:id', deleteCategoria);

module.exports = router;