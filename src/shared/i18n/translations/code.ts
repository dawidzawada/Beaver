export type CodeKey =
  | "code.auspost"
  | "code.azteccode"
  | "code.azteccodecompact"
  | "code.aztecrune"
  | "code.bc412"
  | "code.channelcode"
  | "code.codablockf"
  | "code.code11"
  | "code.code128"
  | "code.code16k"
  | "code.code2of5"
  | "code.code32"
  | "code.code39"
  | "code.code39ext"
  | "code.code49"
  | "code.code93"
  | "code.code93ext"
  | "code.codeone"
  | "code.coop2of5"
  | "code.daft"
  | "code.databarexpanded"
  | "code.databarexpandedcomposite"
  | "code.databarexpandedstacked"
  | "code.databarexpandedstackedcomposite"
  | "code.databarlimited"
  | "code.databarlimitedcomposite"
  | "code.databaromni"
  | "code.databaromnicomposite"
  | "code.databarstacked"
  | "code.databarstackedcomposite"
  | "code.databarstackedomni"
  | "code.databarstackedomnicomposite"
  | "code.databartruncated"
  | "code.databartruncatedcomposite"
  | "code.datalogic2of5"
  | "code.datamatrix"
  | "code.datamatrixrectangular"
  | "code.datamatrixrectangularextension"
  | "code.dotcode"
  | "code.ean13"
  | "code.ean13composite"
  | "code.ean14"
  | "code.ean2"
  | "code.ean5"
  | "code.ean8"
  | "code.ean8composite"
  | "code.flattermarken"
  | "code.gs1-128"
  | "code.gs1-128composite"
  | "code.gs1-cc"
  | "code.gs1datamatrix"
  | "code.gs1datamatrixrectangular"
  | "code.gs1dldatamatrix"
  | "code.gs1dlqrcode"
  | "code.gs1dotcode"
  | "code.gs1northamericancoupon"
  | "code.gs1qrcode"
  | "code.hanxin"
  | "code.hibcazteccode"
  | "code.hibccodablockf"
  | "code.hibccode128"
  | "code.hibccode39"
  | "code.hibcdatamatrix"
  | "code.hibcdatamatrixrectangular"
  | "code.hibcmicropdf417"
  | "code.hibcpdf417"
  | "code.hibcqrcode"
  | "code.iata2of5"
  | "code.identcode"
  | "code.industrial2of5"
  | "code.interleaved2of5"
  | "code.isbn"
  | "code.ismn"
  | "code.issn"
  | "code.itf14"
  | "code.japanpost"
  | "code.kix"
  | "code.leitcode"
  | "code.mailmark"
  | "code.mands"
  | "code.matrix2of5"
  | "code.maxicode"
  | "code.micropdf417"
  | "code.microqrcode"
  | "code.msi"
  | "code.onecode"
  | "code.pdf417"
  | "code.pdf417compact"
  | "code.pharmacode"
  | "code.pharmacode2"
  | "code.planet"
  | "code.plessey"
  | "code.posicode"
  | "code.postnet"
  | "code.pzn"
  | "code.qrcode"
  | "code.rationalizedCodabar"
  | "code.raw"
  | "code.rectangularmicroqrcode"
  | "code.royalmail"
  | "code.sscc18"
  | "code.swissqrcode"
  | "code.symbol"
  | "code.telepen"
  | "code.telepennumeric"
  | "code.ultracode"
  | "code.upca"
  | "code.upcacomposite"
  | "code.upce"
  | "code.upcecomposite";

export const CodeTranslationEN: Record<CodeKey, string> = {
  "code.auspost": "AusPost 4 State Customer Code",
  "code.azteccode": "Aztec Code",
  "code.azteccodecompact": "Compact Aztec Code",
  "code.aztecrune": "Aztec Runes",
  "code.bc412": "BC412",
  "code.channelcode": "Channel Code",
  "code.codablockf": "Codablock F",
  "code.code11": "Code 11",
  "code.code128": "Code 128",
  "code.code16k": "Code 16K",
  "code.code2of5": "Code 25",
  "code.code32": "Italian Pharmacode",
  "code.code39": "Code 39",
  "code.code39ext": "Code 39 Extended",
  "code.code49": "Code 49",
  "code.code93": "Code 93",
  "code.code93ext": "Code 93 Extended",
  "code.codeone": "Code One",
  "code.coop2of5": "COOP 2 of 5",
  "code.daft": "Custom 4 state symbology",
  "code.databarexpanded": "GS1 DataBar Expanded",
  "code.databarexpandedcomposite": "GS1 DataBar Expanded Composite",
  "code.databarexpandedstacked": "GS1 DataBar Expanded Stacked",
  "code.databarexpandedstackedcomposite": "GS1 DataBar Expanded Stacked Composite",
  "code.databarlimited": "GS1 DataBar Limited",
  "code.databarlimitedcomposite": "GS1 DataBar Limited Composite",
  "code.databaromni": "GS1 DataBar Omnidirectional",
  "code.databaromnicomposite": "GS1 DataBar Omnidirectional Composite",
  "code.databarstacked": "GS1 DataBar Stacked",
  "code.databarstackedcomposite": "GS1 DataBar Stacked Composite",
  "code.databarstackedomni": "GS1 DataBar Stacked Omnidirectional",
  "code.databarstackedomnicomposite": "GS1 DataBar Stacked Omnidirectional Composite",
  "code.databartruncated": "GS1 DataBar Truncated",
  "code.databartruncatedcomposite": "GS1 DataBar Truncated Composite",
  "code.datalogic2of5": "Datalogic 2 of 5",
  "code.datamatrix": "Data Matrix",
  "code.datamatrixrectangular": "Data Matrix Rectangular",
  "code.datamatrixrectangularextension": "Data Matrix Rectangular Extension",
  "code.dotcode": "DotCode",
  "code.ean13": "EAN-13",
  "code.ean13composite": "EAN-13 Composite",
  "code.ean14": "GS1-14",
  "code.ean2": "EAN-2 (2 digit addon)",
  "code.ean5": "EAN-5 (5 digit addon)",
  "code.ean8": "EAN-8",
  "code.ean8composite": "EAN-8 Composite",
  "code.flattermarken": "Flattermarken",
  "code.gs1-128": "GS1-128",
  "code.gs1-128composite": "GS1-128 Composite",
  "code.gs1-cc": "GS1 Composite 2D Component",
  "code.gs1datamatrix": "GS1 Data Matrix",
  "code.gs1datamatrixrectangular": "GS1 Data Matrix Rectangular",
  "code.gs1dldatamatrix": "GS1 Digital Link Data Matrix",
  "code.gs1dlqrcode": "GS1 Digital Link QR Code",
  "code.gs1dotcode": "GS1 DotCode",
  "code.gs1northamericancoupon": "GS1 North American Coupon",
  "code.gs1qrcode": "GS1 QR Code",
  "code.hanxin": "Han Xin Code",
  "code.hibcazteccode": "HIBC Aztec Code",
  "code.hibccodablockf": "HIBC Codablock F",
  "code.hibccode128": "HIBC Code 128",
  "code.hibccode39": "HIBC Code 39",
  "code.hibcdatamatrix": "HIBC Data Matrix",
  "code.hibcdatamatrixrectangular": "HIBC Data Matrix Rectangular",
  "code.hibcmicropdf417": "HIBC MicroPDF417",
  "code.hibcpdf417": "HIBC PDF417",
  "code.hibcqrcode": "HIBC QR Code",
  "code.iata2of5": "IATA 2 of 5",
  "code.identcode": "Deutsche Post Identcode",
  "code.industrial2of5": "Industrial 2 of 5",
  "code.interleaved2of5": "Interleaved 2 of 5 (ITF)",
  "code.isbn": "ISBN",
  "code.ismn": "ISMN",
  "code.issn": "ISSN",
  "code.itf14": "ITF-14",
  "code.japanpost": "Japan Post 4 State Customer Code",
  "code.kix": "Royal Dutch TPG Post KIX",
  "code.leitcode": "Deutsche Post Leitcode",
  "code.mailmark": "Royal Mail Mailmark",
  "code.mands": "Marks & Spencer",
  "code.matrix2of5": "Matrix 2 of 5",
  "code.maxicode": "MaxiCode",
  "code.micropdf417": "MicroPDF417",
  "code.microqrcode": "Micro QR Code",
  "code.msi": "MSI Modified Plessey",
  "code.onecode": "USPS Intelligent Mail",
  "code.pdf417": "PDF417",
  "code.pdf417compact": "Compact PDF417",
  "code.pharmacode": "Pharmaceutical Binary Code",
  "code.pharmacode2": "Two-track Pharmacode",
  "code.planet": "USPS PLANET",
  "code.plessey": "Plessey UK",
  "code.posicode": "PosiCode",
  "code.postnet": "USPS POSTNET",
  "code.pzn": "Pharmazentralnummer (PZN)",
  "code.qrcode": "QR Code",
  "code.rationalizedCodabar": "Codabar",
  "code.raw": "Custom 1D symbology",
  "code.rectangularmicroqrcode": "Rectangular Micro QR Code",
  "code.royalmail": "Royal Mail 4 State Customer Code",
  "code.sscc18": "SSCC-18",
  "code.swissqrcode": "Swiss QR Code",
  "code.symbol": "Miscellaneous symbols",
  "code.telepen": "Telepen",
  "code.telepennumeric": "Telepen Numeric",
  "code.ultracode": "Ultracode",
  "code.upca": "UPC-A",
  "code.upcacomposite": "UPC-A Composite",
  "code.upce": "UPC-E",
  "code.upcecomposite": "UPC-E Composite",
};
