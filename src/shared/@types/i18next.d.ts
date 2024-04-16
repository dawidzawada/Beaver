import "i18next";
import { Languages } from "@shared/enums/Language.enum";
import { TranslationEN } from "@shared/i18n/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: Languages.EN;
    resources: {
      en: typeof TranslationEN;
    };
  }
}
