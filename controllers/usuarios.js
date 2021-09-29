const { request, response } = require('express');
const usuarios = require('../data/usuarios');

const getUsuarios = (request, response) => {
    response.json({ 
        data : usuarios
    });
}

module.exports = getUsuarios;