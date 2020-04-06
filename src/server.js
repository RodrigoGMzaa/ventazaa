const express = require('express');
const {unlink} = require('fs-extra');
const path = require('path');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const methodOverride = require('method-override'); 
const session = require('express-session');
const multer = require('multer');
const mongoose = require('mongoose');
const ejsLint = require('ejs-lint');




// initialization
const app = express();
require('./database');


// Settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middlewares 
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.json());
const storage = multer.diskStorage({
    destination:  path.join(__dirname, 'public/images/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));

    }
});
app.use(multer({storage: storage}).single('image'));
 


// Global Variables



// Routes
app.use(require('./routes/index')); 
app.use('/categorys',require('./routes/categorys'));
app.use('/products',require('./routes/productos'));
app.use('/sales',require('./routes/ventas'));
app.use('/clien',require('./routes/clientes'));


// Static File 
app.use(express.static(path.join(__dirname, 'public')));



// Server is Listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});