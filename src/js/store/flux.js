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
      InsertCharacters: (data) => {
        const ActualCharacters = getStore().characters;

        /**
         * The data of all the displayed characters will be saved (avoiding duplications) 
         * I want to do this because if store.characters were reset every time, we lose the referenceces of the "likes" and "bookmarks"
         * 
         * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
         * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/has
         */
        const ActualUIDs = new Set(ActualCharacters.map(CharacterInfo => CharacterInfo.uid));
        let NewCharacters = data.results.filter(CharacterInfo => !ActualUIDs.has(CharacterInfo.uid));
        NewCharacters = ActualCharacters.concat(NewCharacters);
        
        setStore({ characters: NewCharacters, next_page: data.next });
      },
      InsertCharacterInfo: (data) => {      
        setStore({ characters_info: {...getStore().characters_info,  [data.result.uid]: data.result } });
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
