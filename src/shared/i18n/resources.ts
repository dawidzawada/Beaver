import { Languages } from "@shared/enums/Language.enum";
import { AddEditKey, AddEditKeyTranslationEN } from "@shared/i18n/translations/add-edit";
import { CameraKey, CameraTranslationEN } from "@shared/i18n/translations/camera";
import { CodeKey, CodeTranslationEN } from "@shared/i18n/translations/code";
import { GeneralKey, GeneralTranslationEN } from "@shared/i18n/translations/general";
import { ListKey, ListKeyTranslationEN } from "@shared/i18n/translations/list";
import { NavigationKey, NavigationTranslationEN } from "@shared/i18n/translations/navigation";
import { Resource } from "i18next";

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
