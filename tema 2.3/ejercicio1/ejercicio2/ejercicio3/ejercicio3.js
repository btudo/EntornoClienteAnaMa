
do{
    var dia=prompt("Introduce el dia de tu cumple") ;
    var mes=prompt("Introduce el mes de tu cumple") ;
}while(isNaN(dia) || isNaN(mes));

var fecha= new Date(2023,mes,dia);
var contador=0;
for (var i = 2023; i < 2100; i++) {
     fecha.setFullYear(i);
    if(fecha.getDay() === 0){
        contador++;
    }  
}
document.write("Tu cumple cae en domingo " + contador + "años");
