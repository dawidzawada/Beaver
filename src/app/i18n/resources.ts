import {Resource} from 'i18next';
import {Languages} from '@app/enums/Language.enum.ts';
import {GeneralKey, GeneralTranslationEN} from '@app/i18n/translations/general.ts';

export type TranslationKey = GeneralKey;

export const TranslationEN: Record<TranslationKey, string> = {
  ...GeneralTranslationEN,
};

export const i18nResources: Resource = {
  [Languages.EN]: {
    translation: TranslationEN,
  },
};
