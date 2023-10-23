const array= new Array();


for (let i = 0; i <= 2; i++) {
    const input=prompt("Introduce una palabra");
    
    if (input !== null) {
       array[i] = input;
   } else{
       array[i]="";
   }
    
}


document.write(array);
console.log(array);
var contador=0;
array.forEach(element => {
   
    if( !element.startsWith("c") || element===""){
        contador++;
    }else{
        document.write("<br> Empieza por c : " +element);
    }
   
});
if(contador === 3){
    document.write("<br>Ninguna palabra empieza por c  " );
}