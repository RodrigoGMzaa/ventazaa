const mongoose = require('mongoose');

mongoose.connect('mongodb://utvco:utvco2020@ds161028.mlab.com:61028/cremeria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('db is connected'))
.catch(err => console.log(err));