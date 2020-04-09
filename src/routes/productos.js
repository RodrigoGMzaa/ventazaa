const express = require('express');
const router = express.Router();

//archivo de controller
const productct = require('../controllers/product.controller');



router.get('/mostrar', productct.getProducts);

router.get('/busqueda', productct.buscarProducts);

router.get('/producto', productct.mosProducts);

router.post('/enviar', productct.createProducts);

router.get('/edit/:id', productct.getProduct);

router.post('/edit/:id', productct.editProduct);

router.get('/delet/:id', productct.deletProduct);



module.exports = router;