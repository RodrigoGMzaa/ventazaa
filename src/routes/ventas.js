const express = require('express');
const router = express.Router();
const VentaController = require("./../controllers/ventas.controller");



router.get('/ventas', function(req, res) {
    res.render('venta');
  });
router.post("/venta", VentaController.guardar);
router.get("/venta", VentaController.listar);

module.exports = router;