import { Code, CodeID } from "@domain/Code/model/Code";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CodesStore = {
  codes: Code[];
  getCode: (id: string) => Code | undefined;
  addCode: (codeData: Omit<Code, "id">) => void;
  removeCode: (id: CodeID) => void;
};

export const useCodesStore = create<CodesStore>()(
  persist(
    (set, get) => ({
      codes: [],
      getCode: id => {
        return get().codes.find(code => code.id === id);
      },
      addCode: codeData => {
        const id = uuid.v4().toString();
        set(({ codes: prevCodes }) => ({ codes: [...prevCodes, { id, ...codeData }] }));
        return id;
      },
      removeCode: id => {
        set(({ codes: prevCodes }) => {
          return {
            codes: prevCodes.filter(c => c.id !== id),
          };
        });
      },
    }),
    {
      name: "codes-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
