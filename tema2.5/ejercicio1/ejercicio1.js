const arr=[2,3,4,5,0];
let imprimirArray=(array)=>{
    var suma=0;
    array.forEach(element => {
        
        suma=suma+element;
       
    });
    document.write( " La suma total es : " + suma);
    document.write("<br>La media es : "+suma/arr.length);
}
 imprimirArray(arr);

 const newArr= arr.map(el=>el*3);
 document.write("<br>Nuevo array "+newArr +"<br>");
 document.write("El triple de ese array es : ");
 arr.forEach(element => {
   
    document.write(element*3, " ")
 });