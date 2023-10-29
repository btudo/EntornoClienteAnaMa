let par = (a) => {
  if (a % 2 == 0) {
    return a + " es par";
  } else {
    return a + " es impar";
  }
};

for (let i = 0; i <= 500; i++) {
  document.write(
    i + " " + par(parseInt(Math.random() * (10000 - 1 + 1)) + 1) + "<br>"
  );
}
