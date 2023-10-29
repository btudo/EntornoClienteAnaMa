

let fecha= prompt("Introduce fecha de nacimiento en este formato dd/mm/yyyy");
var fechaArray=fecha.split('/');
var año= parseInt(fechaArray[2]);
let actual= new Date();
let añoActual= actual.getFullYear;
let edad=  añoActual- año;
document.write(edad);


