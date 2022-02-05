const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      next_page: "",
      characters_info: [],
      likes: [],
      bookmarks: [],
    },
    actions: {
      insertCharacters: (data) => {        
        setStore({ characters: getStore().characters.concat(data.results), next_page: data.next });
      },
      insertCharacterInfo: (data) => {      
        setStore({ characters_info: {...getStore().characters_info,  [data.result.uid]: data.result } });
      },
      saveCharacter: (CharacterIndex, type) => {
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
