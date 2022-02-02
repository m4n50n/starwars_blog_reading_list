const URL = "https://www.swapi.tech/api/people";

// Fetch functions. Method GET by default. Fetch will return only the promise
export const ApiGetCharacters = (url = false) => fetch(!url ? URL : url);
export const ApiGetCharacterInfo = (uid) => fetch(`${URL}/${uid}`);
export const ApiSearchCharacters = (search) => fetch(`${URL}/?name=${search}`);
