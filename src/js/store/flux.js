const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      characters: [],
      likes: [],
      bookmarks: []
    },
    actions: {
      InsertCharacters: (data) => {
        const store = getStore();
        setStore({ ...store, characters: data.results });
      },
      SaveCharacter: (CharacterIndex, type) => {
        const store = getStore();        
        const StoreValue = type === "like" ? store.likes : type === "bookmark" ? store.bookmarks : null;

        const CheckIndex = StoreValue.indexOf(CharacterIndex);

        CheckIndex !== -1 ? StoreValue.splice(CheckIndex, 1) : StoreValue.push(CharacterIndex);
        setStore({ ...store });
      },
    },
  };
};

export default getState;
