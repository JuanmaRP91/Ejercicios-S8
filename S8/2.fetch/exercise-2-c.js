const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = input.value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      // Creao un elemento p y un botón con el texto 'X'
      const p = document.createElement("p");
      const closeButton = document.createElement("button");
      closeButton.textContent = "X";

      // Agrego el contenido del data al elemento p
      p.textContent = data;

      // Agrego el elemento p y el botón a la página
      document.body.appendChild(p);
      p.appendChild(closeButton);

      // Asigno un manejador de eventos al botón para eliminar el párrafo cuando se haga click
      closeButton.addEventListener("click", () => {
        p.remove();
      });
    })
    .catch(error => {
      console.error(error);
    });
});