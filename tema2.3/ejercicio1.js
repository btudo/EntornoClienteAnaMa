var fecha = new Date();
var miCum = new Date("1999, 3, 13");
document.write(miCum.toDateString);
document.write(fecha.toDateString);
document.write(miCum.getFullYear);
fecha.setFullYear(2022);
document.write(fecha.toLocaleDateString);
