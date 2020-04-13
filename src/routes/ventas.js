const express = require('express');
const router = express.Router();
const VentaController = require("./../controllers/ventas.controller");



router.get('/ventas', function(req, res) {
    res.render('venta');
  });
router.post("/venta", async (req, res) => {
  try{
    const Ventas = await VentaController.create({...req.body});

    return res.send({Ventas});
  }catch (err){
    return res.status(400).send({error: 'Error al crera la venta'});
  }
});


router.get("/venta", VentaController.listar);

module.exports = router;