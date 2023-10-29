let actual= new Date();
let cumple = new Date(1999,3,13);
document.write(actual + "</br>");
document.write(cumple+ "</br>");
document.write("El año actual es " + actual.getFullYear()+ "</br>");
document.write("El año actual es " + cumple.getFullYear()+ "</br>");
actual.setFullYear(2022);
document.write(actual.toLocaleString()+"<br>");
document.write("El dia es : "+actual.getDate() +"<br>");
document.write("El mes es : "+actual.getMonth() +"<br>");
document.write("El año es : "+actual.getFullYear() +"<br>");

