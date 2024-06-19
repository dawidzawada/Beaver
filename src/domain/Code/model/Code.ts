import { CodeFormat } from "./CodeFormat";

export type CodeID = string;

export interface Code {
  id: CodeID;
  type: CodeFormat;
  value: string;
  title: string;
}
