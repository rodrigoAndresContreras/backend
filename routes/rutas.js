const { Router } = require('express');

const getUsuarios = require('../controllers/usuarios');

const router = Router();

// rutas para llamar a datos usuarios
router.get('/usuarios', getUsuarios);

module.exports = router;