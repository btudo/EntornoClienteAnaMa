let fecha= new Date();
document.write("Formato dd/mm/yyyy " + fecha.toLocaleDateString() +"<br>");
document.write("Dia de la semana mes dia año, en inglés " + fecha.toDateString()+" <br>");
document.write("Formato dd/mm/yyyy hh:mm:ss " + fecha.toLocaleString()+"<br>");
document.write("Formato Hh:mm:ss " + fecha.toLocaleTimeString());