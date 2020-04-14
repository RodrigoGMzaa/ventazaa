const express = require('express');
const router = express.Router();
const VentaController = require("../controllers/ventas.controller");
const Venta = require("../models/ventaModels");


router.get('/ventas', function(req, res) {
    res.render('venta');
  });

router.post("/venta", async (req, res) => {
  const venta =new Venta({
    valor_total: body.total,
    cliente: body.cliente,
    productos: respuesta
});
    await venta.save();
    res.redirect('/ventas');
});


router.get("/ventalis", VentaController.listar);

module.exports = router;