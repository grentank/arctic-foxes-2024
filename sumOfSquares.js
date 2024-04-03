function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

function sumOfSquaresTheBest(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function sumOfSquaresRecursive(n) {
  if (n <= 1) return 1;
  return sumOfSquaresRecursive(n - 1) + (n * n);
}

function sumOfSquaresArray(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i * i);
  }
  return numbers.reduce((acc, num) => acc + num);
}
console.time('formula');
sumOfSquaresTheBest(1e6);
console.timeEnd('formula');
console.time('plane');
sumOfSquares(1e6);
console.timeEnd('plane');
console.time('array');
sumOfSquaresArray(1e6);
console.timeEnd('array');
console.time('recursive');
sumOfSquaresRecursive(1e6);
console.timeEnd('recursive');
