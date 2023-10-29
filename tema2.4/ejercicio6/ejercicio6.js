
var nuevaVentana;
let boton=()=>{
    let fecha=new Date();

if(fecha.getDay == 0 || fecha.getDay ==6 ){
    nuevaVentana=open("sonriente.html","carita sonriente","width=400px","height=400px");
}
else{
    nuevaVentana=open("nosonriente.html","carita sonriente","width=400px","height=400px");
}

}
