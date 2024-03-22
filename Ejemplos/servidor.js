const http = require("http");
const cowsay = require("cowsay");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    // Utilizamos cowsay para generar una respuesta divertida
    const mensaje = cowsay.say({ text: "Atendiendo una solicitud v3" });
    res.end(mensaje);
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log("El servidor está corriendo en el puerto " + puerto);
});