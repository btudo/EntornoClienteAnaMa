function Boton1() {
  var nuevaVentana = window.open(
    "selector_color.html",
    "segundapag",
    "width=300,height=300"
  );
}
function cambiarColor() {
  let color = formulario.color.value;
  window.opener.document.body.style.backgroundColor = color;
  window.close();
}
