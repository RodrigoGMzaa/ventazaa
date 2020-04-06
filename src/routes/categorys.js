const express = require('express');
const router = express.Router();

//archivo de controller
const categoryct = require('../controllers/category.controller');


router.get('/cate', categoryct.getCategorys);

router.get('/busqueda', function(req, res) {
    res.render('busqueda');
  });

router.get('/agrecate', categoryct.agreCategorys);

router.post('/cate', categoryct.createCategorys);

router.get('/op/:id', categoryct.getCategory);

router.put('/cate/:id', categoryct.editCategory);

router.get('/delet/:id', categoryct.deletCategory);

module.exports = router; 