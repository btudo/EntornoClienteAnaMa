function abrirVentana() {
  let nueva = window.open("datos.html", "otrapagina");
}

function datos() {
  var fechaF = new Date(formulario.fecha.value);
  window.opener.document.write(
    "nombre: " +
      formulario.nombre.value +
      "<br>" +
      "apellido: " +
      formulario.apellido.value +
      "<br>" +
      "fecha: " +
      fechaF.toLocaleDateString() +
      "<br>"
  );
  let año = fechaF.getFullYear();
  for (let i = año; i < 2023; i++) {
    if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0) {
      window.opener.document.write("Año bisiesto " + i + "<br>");
    }
  }
}
function mostrar() {
  datos();

  window.close();
}

0.0;
