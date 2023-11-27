


const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_aIticapc5yMKLwBj7F4yaqx5l1ORt0AS6YUa15623BhG0txC4b6GwSarHvE9PX3u";

function fetchBreeds() {
    const END_POINT = "/breeds";

    return fetch(`${BASE_URL}${END_POINT}`, {
        headers: {
        "x-api-key": API_KEY,
        }
    })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText || "Error");
            }

            return resp.json();
        });
}

function fetchCatByBreed(breedId, elements) {
    elements.loader.classList.remove("hidden");
    elements.catInfo.classList.add("hidden");
    const END_POINT = "/images/search";

    const params = new URLSearchParams({
        api_key: API_KEY,
        breed_ids: breedId
    });
   
    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText || "Error");
            }

            return resp.json();
        });
}

export { fetchBreeds, fetchCatByBreed };