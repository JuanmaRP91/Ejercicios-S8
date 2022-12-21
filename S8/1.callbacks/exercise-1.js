const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(2, 3, sum);
father(5, 3, subtract);
father(10, 5, sum);

console.log(numbersList);