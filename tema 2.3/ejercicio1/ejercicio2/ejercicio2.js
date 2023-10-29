let actual= new Date();
let finCurso= new Date(2024,5,30);
let resta= (finCurso - actual);
//Esto es un día entonces divido todos los milisengundos entre un dia para saber cunatos dias son
let dias= 24*60*60*1000;
document.write(Math.floor(resta/dias));