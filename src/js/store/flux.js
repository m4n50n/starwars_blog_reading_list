const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      characters: [],
      characters_info: [],
      likes: [],
      bookmarks: []
    },
    actions: {
      InsertCharacters: (data) => {
        const store = getStore();
        setStore({ ...store, characters: data.results });
      },
      InsertCharacterInfo: (data) => {
        const store = getStore();
        setStore({ ...store, characters_info: {[data.result.uid]: data.result} });
      },
      SaveCharacter: (CharacterIndex, type) => {
        const store = getStore();        
        const StoreValue = type === "likes" ? store.likes : type === "bookmarks" ? store.bookmarks : null;

        const CheckIndex = StoreValue.indexOf(CharacterIndex);

        CheckIndex !== -1 ? StoreValue.splice(CheckIndex, 1) : StoreValue.push(CharacterIndex);
        setStore({ ...store });
      },
    },
  };
};

export default getState;
