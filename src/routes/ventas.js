const express = require('express');
const router = express.Router();
const VentaController = require("./../controllers/ventas.controller");
const Venta = require("../models/ventaModels");


router.get('/ventas', function(req, res) {
    res.render('venta');
  });

router.post("/venta", async (req, res) => {
  const venta =new Venta(req.body);
    await venta.save();
    res.redirect('/');
});


router.get("/venta", VentaController.listar);

module.exports = router;