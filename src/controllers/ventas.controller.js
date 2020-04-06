const producto = require('../models/product');
const {unlink} = require('fs-extra');
const path = require('path');



const ventact = {};


ventact.getVentas =  async (req, res) => {
    const rojo = await producto.find({_id:'5e3dc2438a94bf4f5c27aa8d' }, req.body);
    const colorado = await producto.find({_id:'5e3dc1558a94bf4f5c27aa8b' }, req.body);
    res.render('venta', {rojo, colorado});

     
     

};


ventact.createVentas = async (req, res) => {
   
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
  
    res.redirect('pro');
 
};


ventact.getVenta = async (req, res) => {
    const categoris = await categoria.find();
    const{id} = req.params;
    const Producto = await producto.findById(id);
     res.render('editpro', {Producto, categoris});
};

ventact.editVenta = async (req, res) => {
    const{id} = req.params;
    await producto.update({_id: id}, req.body);
    res.redirect('/products/pro');
};



ventact.deletVenta = async (req, res) => {
 const Producto = await producto.findByIdAndRemove(req.params.id);
 await unlink(path.resolve('./src/public' + Producto.path));
    res.redirect('/products/pro');
};
    
ventact.getsearch = async (req, res) => {
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

module.exports = ventact;