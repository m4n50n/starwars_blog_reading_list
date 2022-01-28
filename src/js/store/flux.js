import { ApiGetCharacters } from "../service/api-requests";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      characters: [],
      favorites: [],
    },
    actions: {
      GetCharacters: () => {
        const store = getStore();
        store.loading = true;

        ApiGetCharacters()
          .then((response) => response.json())
          .then((data) => {            
            setStore({...store, characters: data.results});
            console.log(getStore());
          })
          .catch((error) => console.error("Error!!!: ", error))
          .finally(store.loading = false);
      },
    },
  };
};

export default getState;
