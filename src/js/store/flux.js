const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      characters_info: [],
      likes: [],
      bookmarks: [],
    },
    actions: {
      InsertCharacters: (data) => {
        setStore({ characters: data.results });
      },
      InsertCharacterInfo: (data) => {        
        setStore({ characters_info: {...getStore().characters_info,  [data.result.uid]: data.result } });
        console.log(getStore());
      },
      SaveCharacter: (CharacterIndex, type) => {
        const store = getStore();
        const CheckIndex = store[[type]].indexOf(CharacterIndex);

        CheckIndex !== -1
          ? store[[type]].splice(CheckIndex, 1)
          : store[[type]].push(CharacterIndex);
        setStore({ ...store });
      },
    },
  };
};

export default getState;
