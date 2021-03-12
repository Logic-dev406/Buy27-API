const mongoose = require('mongoose');
const { connectionString } = require('../config/config');

//mongodb connection
mongoose.connect(
    connectionString,

    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
