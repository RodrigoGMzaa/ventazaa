const express = require('express');
const router = express.Router();

//archivo de controller
const ventact = require('../controllers/ventas.controller');



router.get('/ven', ventact.getVentas);

router.post('/ven', ventact.createVentas);

router.get('/edit/:id', ventact.getVenta);

router.post('/edit/:id', ventact.editVenta);

router.get('/delet/:id', ventact.deletVenta);

router.get('/search', ventact.getsearch);

module.exports = router;