const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = input.value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      
      const countries = data.country;
      const p = document.createElement("p");
      let text = `El nombre ${name} tiene `;
      countries.forEach((country, index) => {
        text += `un ${country.probability}% de ser de ${country.country_id}`;
        if (index < countries.length - 2) {
          text += ", ";
        } else if (index < countries.length - 1) {
          text += " y ";
        }
      });
      p.textContent = text;
      document.body.appendChild(p);
    })
    .catch(error => {
      
      console.error(error);
    });
});