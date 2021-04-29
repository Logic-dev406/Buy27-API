const mongoose = require('mongoose');
const { connectionString } = require('../config/config');

//mongodb connection
mongoose
    .connect(
        connectionString,

        {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => {
        console.log('Database Connection is ready');
    })
    .catch((e) => {
        console.log(e);
    });
