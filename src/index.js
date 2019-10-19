const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const { port } = require('../config/index');

//init express app
const app = express();
require('./entries/database/index');


//middlewares
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV == 'develomenpt') {
    app.use(morgan('dev'));
}

//setting up to static directory
app.use(express.static(path.join(__dirname, 'public')));

//handle production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(__dirname + '/public/'));

    //handle SPA
    app.get(/.*/, (req, res) => res.sendfile(__dirname + '/public/index.html'));
}

//routes
app.use(require('./routes/app.routes'));
const tasks = require('./routes/tasks.routes');
app.use('/api/v1/tasks', tasks);

//server
app.listen(port, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}!`));