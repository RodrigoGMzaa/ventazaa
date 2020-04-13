const express = require('express');
const router = express.Router();
const VentaController = require("./../controllers/ventas.controller");



router.get('/ventas', function(req, res) {
    res.render('venta');
  });
router.post("/venta", async (req, res) => {
  try{

    const {valor_total, cliente, producto, cantidad} = req.body;

    const Ventas = await VentaController.create({...req.body, description});

    producto.map(async producto =>{
      const productos = new producto({...producto, productos: Productos._id});
      
      productos.save().then(producto =>  productos.producto.push(producto));
    });

    await producto.save();

    return res.send({Ventas});
  }catch (err){
    return res.status(400).send({error: 'Error al crera la venta'});
  }
});


router.get("/venta", VentaController.listar);

module.exports = router;