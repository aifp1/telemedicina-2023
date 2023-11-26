const { Router } = require('express');

const router = Router();

const { getMedicos, getMedico, addMedico } = require('../controllers/medico.controller');

router.get('/medico/getMedicos', getMedicos);
router.get('/medico/getMedico/:id', getMedico);
router.post('/medico/addMedico', addMedico);

module.exports = router;