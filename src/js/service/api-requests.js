export const ApiGetCharacters = () => fetch("https://www.swapi.tech/api/people?page=1&limit=20"); // Method GET by default. Here, fetch return only promise
export const ApiGetCharacterInfo = (id) => fetch(`https://www.swapi.tech/api/people/${id}`);
