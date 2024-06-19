export type CodeKey =
  | "code.code-128"
  | "code.code-39"
  | "code.code-93"
  | "code.codabar"
  | "code.ean-13"
  | "code.ean-8"
  | "code.itf"
  | "code.upc-e"
  | "code.upc-a"
  | "code.qr"
  | "code.pdf-417"
  | "code.aztec"
  | "code.data-matrix";

export const CodeTranslationEN: Record<CodeKey, string> = {
  "code.code-128": "Code 128",
  "code.code-39": "Code 39",
  "code.code-93": "Code 93",
  "code.codabar": "Codabar",
  "code.ean-13": "Ean 13",
  "code.ean-8": "Ean 8",
  "code.itf": "ITF",
  "code.upc-e": "UPC-E",
  "code.upc-a": "UPC-A",
  "code.qr": "QR Code",
  "code.pdf-417": "PDF 417",
  "code.aztec": "Aztec",
  "code.data-matrix": "Data Matrix",
};
