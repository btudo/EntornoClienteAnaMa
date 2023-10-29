var nuevaVentana=open("secundaria.html","pag2","width=400px","height=400px");
var numero=nuevaVentana.prompt("Intoduce numero 1 al 20");
nuevaVentana.close();

let bucle=(a)=>{
    document.write(`<ul>`);
    for (let lista = 1; lista <=a ; lista++) {
        document.write(`<li> ${lista} </li>`);
        
    }
    document.write(`</ul>`);

}
bucle(numero);