const express = require('express');
const router = express.Router();

//archivo de controller
const productct = require('../controllers/product.controller');



router.get('/pro', productct.getProducts);

router.post('/pro', productct.createProducts);

router.get('/edit/:id', productct.getProduct);

router.post('/edit/:id', productct.editProduct);

router.get('/delet/:id', productct.deletProduct);

router.get('/search', productct.getsearch);

module.exports = router;