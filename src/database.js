const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zaachila', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('db is connected'))
.catch(err => console.log(err));