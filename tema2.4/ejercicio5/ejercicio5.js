

let tabla=(filas,columnas,color)=>{
    document.write(`<table bordercolor="${color}" cellspacing="1" border="1" cellpadding="3" width=100% > `);
for (let tr = 0; tr < columnas; tr++) {
 document.write("<tr>");
 for (let td = 0; td < filas; td++) {
    document.write("<td>hola</td>");
   
 }  
 document.write("</tr>");

}
document.write("</table><br>"); 

}
tabla (10, 4, "red");
tabla(20,10,"black");
for (let indice = 0; indice < 10; indice++) {
    tabla(5,4,"green");
    document.write("<br>");
    
}