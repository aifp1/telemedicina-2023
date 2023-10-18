const { Router } = require('express');

const router = Router();

const { loginAdmin, logout } = require('../controllers/autorizacion.controller');

router.post('/auth/login', loginAdmin);
router.post('/auth/logout', logout);

module.exports = router;