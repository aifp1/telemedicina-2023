const { Router } = require('express');

const router = Router();

const { getPrestacionesMedicos, getPrestacionMedico, addPrestacionMedico, deletePrestacionMedico } = require('../controllers/prestaciones_medico.controller');

router.get('/prestacionesMedico/getPrestacionesMedicos', getPrestacionesMedicos);
router.post('/prestacionesMedico/getPrestacionMedico', getPrestacionMedico);
router.post('/prestacionesMedico/addPrestacionMedico', addPrestacionMedico);
router.delete('/prestacionesMedico/deletePrestacionMedico/:id', deletePrestacionMedico);

module.exports = router;