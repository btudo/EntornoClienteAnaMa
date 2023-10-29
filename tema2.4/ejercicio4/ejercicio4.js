
do{
    var numero=prompt("Introduce un numero");
}while(numero <0 || isNaN(numero));

 let vsuma=(a) =>{
    var suma=0;
    
    
    for (let i = a; i > 0; i--) {
         suma= suma  +i;
       
    }
   document.write(`Sumatorio de ${numero}   = ${suma}`);

 }
 vsuma(parseInt(numero));