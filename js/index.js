let counter = 1;
const container = document.getElementById("container");
class Character {
  constructor(id, name, image, originName, status, species) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.origin = originName;
    this.status = status;
    this.species = species;
    this.render();
  }
  build() {
    return `
     <div class="logo"></div>
        <div class="container-img">
          <img
            src=${this.image}
            alt=${this.name}
          />
        </div>
        <div class="character-name">
          <h2>${this.name}</h2>
        </div>
        <div class="character-details">
          <span><bold>Origen:</bold> ${this.origin}</span>
          <span><bold>Especie:</bold> ${this.species}</span>
          <span><bold>Estatus:</bold> ${this.status}</span>
        </div>
        <div class="initgrammers"><img class="logo-ing" src="assets/logo_ing.svg" alt="initgrammers" /> </div>
        
        `;
  }
  render() {
    return (container.innerHTML = this.build());
  }
}

async function apiCharacter(id) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  );
  const resp = await response.json();
  return resp;
}
async function getCharacter(idCharacter) {
  const { id, name, image, origin, status, species } = await apiCharacter(
    idCharacter
  );
  const originName = origin.name;
  new Character(id, name, image, originName, status, species);
}
const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", async () => {
  const { id, name, image, origin, status, species } = await apiCharacter(
    ++counter
  );
  const originName = origin.name;
  new Character(id, name, image, originName, status, species);
});

const beforeButton = document.querySelector("#beforeButton");
beforeButton.addEventListener("click", async () => {
  if (counter > 1) {
    const { id, name, image, origin, status, species } = await apiCharacter(
      --counter
    );
    const originName = origin.name;
    new Character(id, name, image, originName, status, species);
  } else {
    counte = 1;
  }
});
getCharacter(counter);
