export const ApiGetCharacters = async (id = false) => {
    const URL = `https://www.swapi.tech/api/people/${id ? id : ''}`;
    
    try {
        const response = await fetch(URL); // Method GET by default
        return response.ok ? response : false;
    }
    catch (error) {
        console.error("Error!!!: ", error);
        return false;
    }
}
