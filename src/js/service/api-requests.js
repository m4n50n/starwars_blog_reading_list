const URL = "https://www.swapi.tech/api/";
export const ApiGetCharacters = (SearchValue = false) =>
  fetch(
    // Method GET by default. Here, fetch return only promise
    !SearchValue
      ? `${URL}people?page=1&limit=20`
      : `${URL}people/?name=${SearchValue})`
  );

export const ApiGetCharacterInfo = (uid) => fetch(`${URL}people/${uid}`);
