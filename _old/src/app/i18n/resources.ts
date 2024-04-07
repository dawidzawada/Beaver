import {Resource} from 'i18next';
import {Languages} from '@app/enums/Language.enum.ts';
import {GeneralKey, GeneralTranslationEN} from '@app/i18n/translations/general.ts';
import {CameraKey, CameraTranslationEN} from '@app/i18n/translations/camera.ts';
import {CodeKey, CodeTranslationEN} from '@app/i18n/translations/code.ts';
import {NavigationKey, NavigationTranslationEN} from '@app/i18n/translations/navigation.ts';
import {AddEditKey, AddEditKeyTranslationEN} from '@app/i18n/translations/add-edit.ts';
import {ListKey, ListKeyTranslationEN} from '@app/i18n/translations/list.ts';

export type TranslationKey = GeneralKey | CameraKey | CodeKey | NavigationKey | AddEditKey | ListKey;

export const TranslationEN: Record<TranslationKey, string> = {
  ...GeneralTranslationEN,
  ...CameraTranslationEN,
  ...CodeTranslationEN,
  ...NavigationTranslationEN,
  ...AddEditKeyTranslationEN,
  ...ListKeyTranslationEN,
};

export const i18nResources: Resource = {
  [Languages.EN]: {
    translation: TranslationEN,
  },
};
