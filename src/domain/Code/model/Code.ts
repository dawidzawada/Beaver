import { CardStyle } from "@domain/Code/types/CardStyle";

import { CodeFormat } from "./CodeFormat";

export type CodeID = string;

export interface Code {
  id: CodeID;
  type: CodeFormat;
  value: string;
  title: string;
  icon: string;
  style: CardStyle;
}
