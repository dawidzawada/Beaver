import 'i18next';
import {Languages} from '@app/enums/Language.enum.ts';
import {TranslationEN} from '@app/i18n/resources.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: Languages.EN;
    resources: {
      en: typeof TranslationEN;
    };
  }
}
