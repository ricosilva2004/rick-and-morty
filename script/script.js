const image = document.querySelectorAll("img");
const input = document.querySelectorAll("input");
const numeroMaximoDePersonagens = 671;


//gerador de numeros aleatorios
generateRandomNumber = () => {
  return Math.floor(Math.random() * numeroMaximoDePersonagens);
};

//realiza chamada com API p/ busca de personagem
getCharacter = (id, item) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      image[item].width = "300";
      image[item].height = "300";
      image[item].src = data.image;
      image[item].alt = "Imagem do personagem: " + data.name;
      input[item].value = data.name;     
    });
};

main = () => {
  for (let i = 0; i < image.length; i++) {
    let id = generateRandomNumber();
    getCharacter(id, i);
  }
}

