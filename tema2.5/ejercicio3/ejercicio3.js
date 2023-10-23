const M = 5;
const N = 15;
var array = new Array(M);
for (var i = 0; i < M; i++) {
  array[i] = new Array(N);
  for (var j = 0; j < N; j++) {
    if (i === 0 || i === M - 1 || j === 0 || j === N - 1) {
      array[i][j] = 1;
    } else {
      array[i][j] = 0;
    }
  }
}

for (var i = 0; i < M; i++) {
  for (var j = 0; j < N; j++) {
    document.write(array[i][j] + " ");
  }
  document.write("<br>");
}
