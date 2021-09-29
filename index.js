require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rutas = require('./routes/rutas');

const app = express();
const port = process.env.port;

const ruta = '/api';

app.use(cors());
app.use(express.json());
app.use(ruta, rutas);
app.listen(port,()=>{
    console.log('ejecutando servidor en puerto 8889');
});