const express = require('express');
const VentaController = require("./../controller/ventaController");

var router = express.Router();

router.get('/ventas', function(req, res) {
    res.render('venta');
  });

router.post("/venta", VentaController.guardar);
router.get("/venta", VentaController.listar);

module.exports = router;