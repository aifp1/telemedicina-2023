const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const admins = require('./src/routes/administrador.router');
const auth = require('./src/routes/autorizacion.router');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api', admins);
app.use('/api', auth);

module.exports = app;