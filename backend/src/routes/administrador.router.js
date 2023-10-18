const { Router } = require('express');

const router = Router();

const { getAdmin, addAdmin } = require('../controllers/administrador.controller')

router.get('/admin/getAdmin/:id', getAdmin);
router.post('/admin/addAdmin', addAdmin);

module.exports = router;