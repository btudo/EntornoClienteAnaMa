//Almacenamos nuestras fotos en dos vaariables
var tortuga = document.getElementById("tortuga");
var pez = document.getElementById("pez");
//establecemos que nuestra posicion inicial sera 1 para que empiece al prinicipio de la pantalla
var posicion_pez = 1;
var posicion_tortuga = 1;
//inicializamos nuestra variable temporizador
var temporizador;

//colocamos nuestras imagenes en la meta de salida
var comenzar = () => {
  //El porcentaje se usa para que nuestro elemento se mueva un 1% cogiendo de referencia nuestro contenedor
  pez.style.left = "1%";
  tortuga.style.left = "1%";
  //volvemos a poner nuestras variables iniciales en 1
  posicion_pez = 1;
  posicion_tortuga = 1;
};
var empate = () => {
  document.getElementById("boton2").disabled = true;
  document.getElementById("boton3").disabled = true;
  //estamos diciendo que nuestra posicion tiene que estar dentro de nuestra pantalla
  if (posicion_pez <= 95 && posicion_pez >= 1) {
    //Belén. AMpliado a 95
    posicion_pez = posicion_pez + 1;
    pez.style.left = posicion_pez + "%";
    // si no está en 1 coloca nuestra posición en 1
  } else {
    posicion_pez = 1;
    pez.style.left = posicion_pez + "%";
  }

  if (posicion_tortuga <= 95 && posicion_tortuga >= 1) {
    //Belén. AMpliado a 95
    posicion_tortuga = posicion_tortuga + 1;
    tortuga.style.left = posicion_tortuga + "%";
  } else {
    posicion_tortuga = 1;
    tortuga.style.left = posicion_tortuga + "%";
  }
};
var ganador = () => {
  //deshabilitamos los botones
  document.getElementById("boton2").disabled = true;
  document.getElementById("boton3").disabled = true;
  //repetimos lo mismo de arriba
  if (posicion_pez <= 95 && posicion_pez >= 1) {
    //Belén. AMpliado a 95
    posicion_pez = posicion_pez + 2;
    pez.style.left = posicion_pez + "%";
  } else {
    posicion_pez = 1;
    pez.style.left = posicion_pez + "%";
  }

  if (posicion_tortuga <= 95 && posicion_tortuga >= 1) {
    //Belén. AMpliado a 95
    posicion_tortuga = posicion_tortuga + 1;
    tortuga.style.left = posicion_tortuga + "%";
  } else {
    posicion_tortuga = 1;
    tortuga.style.left = posicion_tortuga + "%";
  }
};
//iniciamos nuestro temporizador y llamamos a nuestro método empate

var iniciarCarreraEmpate = () => {
  temporizador = setInterval(empate, 100);
};
//lo iniciamos y llamamos a nuetsro método ganador
var iniciarCarreraGanador = () => {
  temporizador = setInterval(ganador, 100);
};

//paramos nuestro temporizador y volvemos a habilitar los botones
var parar = () => {
  clearInterval(temporizador);

  document.getElementById("boton2").disabled = false;
  document.getElementById("boton3").disabled = false;
};

/*
Muy bien Ana,
Sólo te he subido a 95 la comparación en el if para que llegue más al final de la pantalla., :-)
*/
