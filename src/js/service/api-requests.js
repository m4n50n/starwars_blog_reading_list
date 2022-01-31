const URL = "https://www.swapi.tech/api/";
export const ApiGetCharacters = () => fetch(`${URL}people?page=1&limit=16`); // Method GET by default. Here, fetch return only promise
export const ApiGetCharacterInfo = (uid) => fetch(`${URL}people/${uid}`);
export const ApiSearchCharacter = (search) => fetch(`${URL}people/?name=${uid}`);

