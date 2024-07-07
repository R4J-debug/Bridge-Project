const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const paramsRoutes = require('./routes/paramsRoutes');



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/tokens', tokenRoutes);
app.use('/quotes', quoteRoutes);
app.use('/params', paramsRoutes);

module.exports = app;
