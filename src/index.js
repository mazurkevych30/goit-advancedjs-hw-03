

import { fetchBreeds, fetchCatByBreed } from "./js/cat-api"

const elements = {
    selectBreed: document.querySelector(".breed-select"),
    catInfo: document.querySelector(".cat-info")
}

fetchBreeds()
    .then((data) => {
        elements.selectBreed.insertAdjacentHTML("beforeend", createMarkupSelect(data));
    })
    .catch((err) => console.log(err));

elements.selectBreed.addEventListener("change", handlerPickBreed)

console.dir(elements.selectBreed);
function handlerPickBreed(evt) {
    
    if (!evt.currentTarget.value) {
        return;
    }
    
    fetchCatByBreed(evt.currentTarget.value)
        .then((data) => {
            console.log(data);
            console.log(createMarkupCatInfo(data[0]));
            
            elements.catInfo.innerHTML = createMarkupCatInfo(data[0]);
        })
        .catch((err)=> console.log(err));
}

function createMarkupCatInfo(breed) {
    const { breeds, url } = breed;
    const { name, description, temperament } = breeds[0];
    console.log(temperament);
    const cat = `
      <img src="${url}" alt="${name}/>
      <div>
        <h2>${name}</h2>
        <p>${description}</p>
        <p><b>Temperament:</b ${temperament}</p>
      </div>
      `
    return cat;
}

function createMarkupSelect(arr) {
    return arr.map(({ id, name }) =>
        `
        <option value="${id}">${name}</option>
        `
    ).join("");
}