function color() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letras[Math.floor(Math.random() * 16)];
  }
  return color;
}
for (let i = 0; i < 2000; i++) {
  var cuadrado = document.createElement("div");
  cuadrado.className = "cuadrado";
  cuadrado.style.backgroundColor = color();
  cuadrado.style.left =
    Math.floor(Math.random() * (window.innerWidth - 50)) + "px";
  cuadrado.style.top =
    Math.floor(Math.random() * (window.innerWidth - 50)) + "px";
  document.body.appendChild(cuadrado);
}
