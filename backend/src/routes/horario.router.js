const { Router } = require('express');

const router = Router();

const { getHorarios, getHorario, addHorario, deleteHorario } = require('../controllers/horario.controller')

router.get('/horarios/getHorarios', getHorarios);
router.get('/horarios/getHorario/:id', getHorario);
router.post('/horarios/addHorario', addHorario);
router.delete('/horarios/deleteHorario/:id', deleteHorario);

module.exports = router;