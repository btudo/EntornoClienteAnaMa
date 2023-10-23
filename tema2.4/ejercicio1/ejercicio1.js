//trsdicional

function ccuadrado(a) {
  return Math.pow(a, 2);
}
//funcion anonima
let bcuadrado = function (a) {
  return Math.pow(a, 2);
};

//flecha
let vcuadrado = (a) => {
  return Math.pow(a, 2);
};
document.write(ccuadrado(5) + "<br>");
document.write(bcuadrado(2) + "<br>");
document.write(vcuadrado(8));
