let temporizador = setInterval(mostarMensaje, 2000);

function mostarMensaje() {
  console.log("En un lugar de la mancha");
}
function parar() {
  clearTimeout(temporizador);
}
function segundos() {
  setTimeout(segundos, 1000);
  console.log("Han pasado 3 segundos");
}
