const clientes = require('../models/clientes');

const clienetsct = {};


clienetsct.getClientes =  async (req, res) => {
    
     res.render('clientess');
};


clienetsct.mostrarClientess = (req, res) => {
    clientes.find({},' ')
    .then(doc =>{
       res.json({response:'success', data:doc});
    })
    .catch(err =>{
       console.log('error al cargar elementos', err.message);
    });
   
 }; 


 clienetsct.createClientes = async (req, res) => {
   
    const newclientect = new clientes();
    newclientect.nombre = req.body.nombre;
    newclientect.apellidos = req.body.apellidos;
    newclientect.telefono = req.body.telefono;
    newclientect.calle = req.body.calle,
    newclientect.numero = req.body.numero,
    newclientect.municipio = req.body.municipio;
   

    await newclientect.save();
  
    res.redirect('/clien/registrar');
 
};



module.exports = clienetsct;