const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
        
        const CheckIndex = store[[type]].indexOf(CharacterIndex);

        CheckIndex !== -1 ? store[[type]].splice(CheckIndex, 1) : store[[type]].push(CharacterIndex);
        setStore({ ...store });
      },
    },
  }
}

export default getState;
