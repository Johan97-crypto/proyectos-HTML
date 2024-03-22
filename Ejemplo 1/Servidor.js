//Importa los módulos
const express = require("express");
const app = express();
const puerto = 5000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');

//Atención de la solicitud para la primera ruta
app.get('/', (req,res)=>{
    res.render("index", {titulo:"Titulo dinámico 1",
                        parrafo:"Este es un parráfo de ejemplo para la ruta 1.",
                        Variable_n:"Esta es la n-ésima variable para la ruta 1."})
});

//Atención de la solicitud para la segunda ruta
app.get('/nombre', (req,res)=>{
    res.render("index2", {miNombre:"Johan",
                        titulo:"Titulo dinámico 1",
                        parrafo:"Este es un parráfo de ejemplo para la ruta 1.",
                        Variable_n:"Esta es la n-ésima variable para la ruta 1.",
                        miNombre:"Mi nomnbre es Johan"})
});

//Atención de la solicitud para la tercera ruta
app.get('/ruta3', (req,res)=>{
    res.render("index", {titulo:"Titulo dinámico 3",
                        parrafo:"Este es un parráfo de ejemplo para la ruta 3.",
                        Variable_n:"Esta es la n-ésima variable para la ruta 3."})
});

//Atención de la solicitud para la cuarta ruta
app.get('/ruta4', (req,res)=>{
    res.render("index", {titulo:"Titulo dinámico 4",
                        parrafo:"Este es un parráfo de ejemplo para la ruta 4.",
                        Variable_n:"Esta es la n-ésima variable para la ruta 4."})
});

//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});
