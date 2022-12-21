
const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = input.value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      // aquí puedo hacer algo con la respuesta de la API
      console.log(data);
    })
    .catch(error => {
      // manejo el error aquí
      console.error(error);
    });
});