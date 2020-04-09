const almacen = require('../models/almacenentrada');


const almacenct = {};


almacenct.almacenes =  async (req, res) => {
    const almacens = await almacen.find();
   
    res.render('almacen', {almacens});
};


almacenct.getAlamaceness =  async (req, res) => {
    
     res.render('almacen');
};


almacenct.buscarAlmacenes = (req, res) => {
    almacen.find({},' ')
    .then(doc =>{
       res.json({response:'success', data:doc});
    })
    .catch(err =>{
       console.log('error al cargar elementos', err.message);
    });
   
 }; 


almacenct.createAlmacenes = async (req, res) => {
   
    const newalmacen = new almacen();
    newalamacen.nombre = req.body.nombre;
    newalmacen.stock = req.body.stock;

    await newalmacen.save();
  
    res.redirect('/almacen/mostrar');
 
};


almacenct.getAlmacen = async (req, res) => {
    const almacenes = await almacen.find();
    const{id} = req.params;
    const almacen = await almacen.findById(id);
     res.render('editpro', {almacen, almacenes});
};

almacenct.editAlmacen = async (req, res) => {
    const{id} = req.params;
    await almacen.update({_id: id}, req.body);
    res.redirect('/almacen/mostrar');
};



almacenct.deletAlmacen = async (req, res) => {
 await almacen.findByIdAndRemove(req.params.id);

 res.redirect('/almacen/mostrar');
};
   
//intento de busqueda en express sin jqury

//almacenct.getsearch = async (req, res) => {
 //   let almacens;
   // if(req.require){
     //   coches = await  almacen.find(
       //     {$text:{
         //       $search: req.require.q
           // }},
            //{
             //   score: {$meta: 'textScore'}
            //}
        //).sort({
          //  score: { $meta: 'textScore'}
       // });
   // }
    //res.json(almacens);
//};

module.exports = almacenct;