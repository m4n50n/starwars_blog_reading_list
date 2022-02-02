const URL = "https://www.swapi.tech/api/people";
export const ApiGetCharacters = () => fetch(`${URL}?page=1&limit=8`); // Method GET by default; Fetch will return only the promise
export const ApiGetCharacterInfo = (uid) => fetch(`${URL}/${uid}`);
export const ApiSearchCharacters = (search) => fetch(`${URL}/?name=${search}`);
