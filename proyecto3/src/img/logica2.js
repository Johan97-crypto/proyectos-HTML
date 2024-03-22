// var hola="hi";
// var a=2
// console.log(hola+a);
// var actual="en bodega"
// alert("La papa está "+actual)
var id1=document.getElementById("item1").innerHTML="uno";
var id2=document.getElementById("item2").innerHTML="dos";
var id3=document.getElementById("item3").innerHTML="tres";
var id4=document.getElementById("item4").innerHTML="cuatro";
var id5=document.getElementById("item5").innerHTML="cinco";

// funciones de cambiar contenido desde un boton
function cambiarcontenido1(id, contenido){
document.getElementById(id).innerHTML=contenido;
}
function cambiarcontenido2(id){
    var contenidoDiv2="contenido extra div2"
    document.getElementById(id).innerHTML=contenidoDiv2;
}