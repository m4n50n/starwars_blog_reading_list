const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      characters: [],
      favorites: []
    },
    actions: {
      InsertCharacters: (data) => {
        const store = getStore();
        setStore({ ...store, characters: data.results });
      },
      SetFavorite: (CharacterIndex) => {
        const store = getStore();        
        const CheckIndex = store.favorites.indexOf(CharacterIndex);

        CheckIndex !== -1 ? store.favorites.splice(CheckIndex, 1) : store.favorites.push(CharacterIndex);
        setStore({ ...store });
      },
    },
  };
};

export default getState;
