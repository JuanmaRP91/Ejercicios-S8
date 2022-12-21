const userAnwsers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

// Ejecuto la función father varias veces
father('¿Estás seguro de que quieres continuar?', confirmExample);
father('¿Cuál es tu nombre?', promptExample);
father('¿Quieres hacer otra pregunta?', confirmExample);


console.log(userAnwsers);