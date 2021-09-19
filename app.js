const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./helpers/error-handler');
const path = require('path');
require('./db/mongoose');

//default routs
const productRouter = require('./routers/products');
const userRouter = require('./routers/users');
const orderRouter = require('./routers/orders');
const categoryRouter = require('./routers/categories');
const { options } = require('./routers/products');

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('WELCOM TO BU27 API');
});

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
// app.use(authJwt());
// app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(express.static('public/uploads', options));
// app.use(express.static(__dirname + '/public/uploads'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(errorHandler);

//routs
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

//port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up and running on localhost ${port}.`);
});
