const { Router } = require('express');

const router = Router();

const { getMedicos, getMedico, addMedico, deleteMedico } = require('../controllers/medico.controller');

router.get('/medico/getMedicos', getMedicos);
router.get('/medico/getMedico/:id', getMedico);
router.post('/medico/addMedico', addMedico);
router.delete('/medico/deleteMedico/:id', deleteMedico);

module.exports = router;