// main.js
const usuarios1 = require('./usuarios1');
const usuarios2 = require('./usuarios2');

function buscarUsuario(nombreUsuario) {
  if (usuarios1[nombreUsuario]) {
    console.log(`Información del usuario ${nombreUsuario}:`);
    console.log(usuarios1[nombreUsuario]);
  } else if (usuarios2[nombreUsuario]) {
    console.log(`Información del usuario ${nombreUsuario}:`);
    console.log(usuarios2[nombreUsuario]);
  } else {
    console.log(`El usuario ${nombreUsuario} no fue encontrado.`);
  }
}

// Nombre de usuario para buscar
const nombreUsuarioABuscar = "usuario3";
buscarUsuario(nombreUsuarioABuscar);