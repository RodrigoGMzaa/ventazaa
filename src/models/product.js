const mongoose = require('mongoose');
const {Schema} = mongoose; 

const productoSchema = new Schema({
    codigo: {type: String},
    nombre: {type: String},
    descripcion: {type: String},
    departamento: {type: String},
    idalamcen: {type: String},
    unidades:{type: String},
    costo:{type: Number},
    precio: {type: Number},
    cantidad_pro: {type: Number},
    mayoreo:{type: Number},
    filename: {type: String},
    path: {type: String},
    original:{type: String},
    mimetype: {type:String},
    size:{type: Number},
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('producto', productoSchema)