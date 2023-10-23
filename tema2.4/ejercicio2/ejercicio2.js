do {
  var numero = prompt("Introduce un numero");
} while (numero < 0 || isNaN(numero));

let factorial = (numero) => {
  var total = 1;
  for (let i = 1; i <= numero; i++) {
    total = total * i;
  }
  return total;
};
document.write(factorial(numero));
