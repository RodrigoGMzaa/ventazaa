const categoria = require('../models/category');
const producto = require('../models/product');
const {unlink} = require('fs-extra');
const path = require('path');
const products =  producto.find();


const productct = {};


productct.mosProducts =  async (req, res) => {
    const categoris = await categoria.find();
   
    res.render('productos', {categoris});
};


productct.getProducts =  async (req, res) => {
    
     res.render('productosbusqueda');
};


productct.buscarProducts = (req, res) => {
    producto.find({},' ')
    .then(doc =>{
       res.json({response:'success', data:doc});
    })
    .catch(err =>{
       console.log('error al cargar elementos', err.message);
    });
   
 }; 


productct.createProducts = async (req, res) => {
   
    const newproduct = new producto();
    newproduct.codigo = req.body.codigo;
    newproduct.nombre = req.body.nombre;
    newproduct.departamento = req.body.departamento;
    newproduct.stock = req.body.stock,
    newproduct.unidades = req.body.unidades,
    newproduct.descripcion = req.body.descripcion;
    newproduct.costo = req.body.costo;
    newproduct.precio = req.body.precio;
    newproduct.mayoreo = req.body.mayoreo;
    newproduct.filname = req.file.filename;
    newproduct.path = '/images/uploads/' + req.file.filename;
    newproduct.originalname = req.file.originalname;
    newproduct.mimetype = req.file.mimetype;
    newproduct.size = req.file.size;

    await newproduct.save();
  
    res.redirect('/products/producto');
 
};


productct.getProduct = async (req, res) => {
    const categoris = await categoria.find();
    const{id} = req.params;
    const Producto = await producto.findById(id);
     res.render('editpro', {Producto, categoris});
};

productct.editProduct = async (req, res) => {
    const{id} = req.params;
    await producto.update({_id: id}, req.body);
    res.redirect('/products/mostrar');
};



productct.deletProduct = async (req, res) => {
 const Producto = await producto.findByIdAndRemove(req.params.id);
 await unlink(path.resolve('./src/public' + Producto.path));
    res.redirect('/products/mostrar');
};
    
productct.getsearch = async (req, res) => {
    let productoss;
    if(req.require){
        coches = await  producto.find(
            {$text:{
                $search: req.require.q
            }},
            {
                score: {$meta: 'textScore'}
            }
        ).sort({
            score: { $meta: 'textScore'}
        });
    }
    res.json(productoss);
};

module.exports = productct;