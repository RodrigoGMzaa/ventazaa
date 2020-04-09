const express = require('express');
const router = express.Router();

//archivo de controller
const almacenct = require('../controllers/almacen.controller');



router.get('/mostrar', almacenct.getAlamaceness);

router.get('/busqueda', almacenct.buscarAlmacenes);

router.get('/mostrar', almacenct.almacenes);

router.post('/almacen',almacenct.createAlmacenes);

router.get('/edit/:id', almacenct.getAlmacen);

router.post('/edit/:id', almacenct.editAlmacen);

router.get('/delet/:id', almacenct.deletAlmacen);



module.exports = router;