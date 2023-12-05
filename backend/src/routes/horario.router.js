const { Router } = require('express');

const router = Router();

const { getHorarios, getHorario, addHorario, deleteHorario, getHoras } = require('../controllers/horario.controller')

router.get('/horarios/getHorarios', getHorarios);
router.get('/horarios/getHorario/:id', getHorario);
router.post('/horarios/addHorario', addHorario);
router.delete('/horarios/deleteHorario/:id', deleteHorario);
router.get('/horarios/getHoras/:id/:fecha', getHoras);

module.exports = router;