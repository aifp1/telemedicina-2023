const { Router } = require('express');

const router = Router();

const { getHoras_Pacientes, getHora_Paciente, addHora_Paciente, deleteHora_Paciente } = require('../controllers/horas_paciente.controller')

router.get('/horas_paciente/getAdmins', getHoras_Pacientes);
router.get('/horas_paciente/getAdmin/:id',getHora_Paciente);
router.post('/horas_paciente/addAdmin', addHora_Paciente);
router.delete('/horas_paciente/deleteAdmin/:id', deleteHora_Paciente);

module.exports = router;