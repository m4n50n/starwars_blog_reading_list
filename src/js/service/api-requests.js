const URL = "https://www.swapi.tech/api/people";

// Fetch functions. Method GET by default. Fetch will return only the promise
export const apiGetCharacters = (url) => fetch(url || URL); // The url variable receives the url of the next characters page
export const apiGetCharacterInfo = (uid) => fetch(`${URL}/${uid}`);
export const apiSearchCharacters = (search) => fetch(`${URL}/?name=${search}`);
