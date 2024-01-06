import {Code, CodeID} from '@domain/Code/model/Code.ts';
import {createStore} from 'zustand';

type CodesStore = {
  codes: Code[];
  addCode: (code: Code) => void;
  removeCode: (id: CodeID) => void;
};

export const codesStore = createStore<CodesStore>()(set => ({
  codes: [],
  addCode: code => {
    set(({codes: prevCodes}) => ({codes: [...prevCodes, code]}));
  },
  removeCode: id => {
    set(({codes: prevCodes}) => {
      return {
        codes: prevCodes.filter(c => c.id !== id),
      };
    });
  },
}));
