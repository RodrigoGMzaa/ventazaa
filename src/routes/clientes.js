const express = require('express');
const router = express.Router();

//archivo de controller
const clienetsct = require('../controllers/cliente.controller');



router.get('/registrar', clienetsct.getClientes);

router.get('/buscar', function(req, res) {
    res.render('clientesbusqueda');
  });

router.get('/mostrar', clienetsct.mostrarClientess);

router.post('/create', clienetsct.createClientes);




module.exports = router;