

import { fetchBreeds, fetchCatByBreed } from "./js/cat-api"

const elements = {
    selectBreed: document.querySelector(".breed-select"),
    catInfo: document.querySelector(".cat-info"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error")
}


fetchBreeds()
    .then((data) => {
        elements.selectBreed.insertAdjacentHTML("beforeend", createMarkupSelect(data));
        elements.selectBreed.classList.remove("hidden");
        elements.loader.classList.add("hidden");
    })
    .catch((err) => {
        elements.loader.classList.add("hidden");
        elements.error.classList.remove("hidden");
    });

elements.selectBreed.addEventListener("change", handlerPickBreed)

function handlerPickBreed(evt) {
    
    if (!evt.currentTarget.value) {
        return;
    }
    
    fetchCatByBreed(evt.currentTarget.value, elements)
        .then((data) => {
            elements.catInfo.innerHTML = createMarkupCatInfo(data[0]);
            elements.catInfo.classList.remove("hidden");
            elements.loader.classList.add("hidden");            
        })
        .catch((err) => {
            console.log(err);
            elements.selectBreed.classList.add("hidden");
            elements.loader.classList.add("hidden");     
            elements.error.classList.remove("hidden");
        })
}

function createMarkupCatInfo(breed) {
    const { breeds, url } = breed;
    const { name, description, temperament } = breeds[0];
    console.log(temperament);
   
    return `
        <img src="${url}" alt="${name}" width="500">
        <div class="cat-description">
            <h2>${name}</h2>
            <p>${description}</p>
            <p><b>Temperament:</b> ${temperament}</p>
        </div>
        `;
}

function createMarkupSelect(arr) {
    return arr.map(({ id, name }) =>
        `
        <option value="${id}">${name}</option>
        `
    ).join("");
}


export { elements };