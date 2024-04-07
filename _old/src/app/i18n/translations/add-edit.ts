export type AddEditKey =
  | 'add-edit.code-type'
  | 'add-edit.code-value'
  | 'add-edit.code-title'
  | 'add-edit.code-value.placeholder'
  | 'add-edit.code-title.placeholder';

export const AddEditKeyTranslationEN: Record<AddEditKey, string> = {
  'add-edit.code-type': 'Type',
  'add-edit.code-value': 'Value',
  'add-edit.code-title': 'Title',
  'add-edit.code-value.placeholder': 'Enter a code value...',
  'add-edit.code-title.placeholder': 'Enter a code title...',
};
