import { CodeFormat } from "./CodeFormat";
import { CardStyle } from "@domain/Code/types/CardStyle";

export type CodeID = string;

export interface Code {
  id: CodeID;
  type: CodeFormat;
  value: string;
  title: string;
  icon: string;
  style: CardStyle;
}
