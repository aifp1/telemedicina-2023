const { Router } = require('express');

const router = Router();

const { getPacientes, getPaciente, addPaciente, deletePaciente } = require('../controllers/paciente.controller');

router.get('/paciente/getPacientes', getPacientes);
router.get('/paciente/getPaciente/:id', getPaciente);
router.post('/paciente/addPaciente', addPaciente);
router.delete('/paciente/deletePaciente/:id', deletePaciente);

module.exports = router;