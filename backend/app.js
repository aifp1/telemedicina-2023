const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const admins = require('./src/routes/administrador.router');
const auth = require('./src/routes/autorizacion.router');
const categorias = require('./src/routes/categorias.router');
const horario = require('./src/routes/horario.router');
const medicos = require('./src/routes/medico.router');
const paciente = require('./src/routes/paciente.router');
const prestaciones = require('./src/routes/prestaciones.router');
const horas_pacientes = require('./src/routes/horas_pacientes.router');
const prestaciones_medico = require('./src/routes/prestaciones_medico.router');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [],
    credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());


console.log("Cors: ", process.env.CORS_ORIGIN)

app.use('/api', admins);
app.use('/api', auth);
app.use('/api', categorias);
app.use('/api', horario);
app.use('/api', horas_pacientes);
app.use('/api', medicos);
app.use('/api', paciente);
app.use('/api', prestaciones);
app.use('/api', prestaciones_medico);

module.exports = app;