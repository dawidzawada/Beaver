import { BwipCodeTypes } from "bwip-js";

export type CodeID = string;

export interface Code {
  id: CodeID;
  type: BwipCodeTypes;
  value: string;
  title: string;
}
