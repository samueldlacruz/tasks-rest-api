const mongoose = require('mongoose');
const { db } = require('../../../config/index');

//connected db mongo
mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB is connected')).catch(err => console.log(err))

