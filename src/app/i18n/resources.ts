import {Resource} from 'i18next';
import {Languages} from '@app/enums/Language.enum.ts';
import {GeneralKey, GeneralTranslationEN} from '@app/i18n/translations/general.ts';
import {CameraKey, CameraTranslationEN} from '@app/i18n/translations/camera.ts';
import {CodeKey, CodeTranslationEN} from '@app/i18n/translations/code.ts';
import {NavigationKey, NavigationTranslationEN} from '@app/i18n/translations/navigation.ts';

export type TranslationKey = GeneralKey | CameraKey | CodeKey | NavigationKey;

export const TranslationEN: Record<TranslationKey, string> = {
  ...GeneralTranslationEN,
  ...CameraTranslationEN,
  ...CodeTranslationEN,
  ...NavigationTranslationEN,
};

export const i18nResources: Resource = {
  [Languages.EN]: {
    translation: TranslationEN,
  },
};
