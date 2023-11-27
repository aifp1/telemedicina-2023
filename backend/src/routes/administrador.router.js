const { Router } = require('express');

const router = Router();

const { getAdmin, addAdmin, deleteAdmin, getAdmins } = require('../controllers/administrador.controller')

router.get('/admin/getAdmins', getAdmins);
router.get('/admin/getAdmin/:id', getAdmin);
router.post('/admin/addAdmin', addAdmin);
router.delete('/admin/deleteAdmin/:id', deleteAdmin);

module.exports = router;