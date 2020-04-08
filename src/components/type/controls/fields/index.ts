import { FieldInputOptions, FieldInputDefinition } from './input'
import { FieldTextareaOptions, FieldTextareaDefinition } from './textarea'
import { FieldSelectOptions, FieldSelectDefinition } from './select'
import { FieldTextOptions, FieldTextDefinition } from './text'
import { FieldHtmlOptions, FieldHtmlDefinition } from './html'

import { FieldFileuploadOptions, FieldFileuploadDefinition } from './fileupload'
import { FieldImguploadOptions, FieldImguploadDefinition } from './imgupload'
import { FieldTableOptions, FieldTableDefinition, TableColumn } from './table'

export {
  FieldInputOptions, FieldInputDefinition,
  FieldTextareaOptions, FieldTextareaDefinition,
  FieldSelectOptions, FieldSelectDefinition,
  FieldTextOptions, FieldTextDefinition,
  FieldHtmlOptions, FieldHtmlDefinition,

  FieldFileuploadOptions, FieldFileuploadDefinition,
  FieldImguploadOptions, FieldImguploadDefinition,
  FieldTableOptions, FieldTableDefinition, TableColumn,
}

export type FieldOptions =
FieldInputOptions |
FieldTextareaOptions |
FieldSelectOptions |
FieldTextOptions |
FieldHtmlOptions |
FieldFileuploadOptions |
FieldImguploadOptions |
FieldTableOptions;

export type FieldDefinition =
FieldInputDefinition |
FieldTextareaDefinition |
FieldSelectDefinition |
FieldTextDefinition |
FieldHtmlDefinition |
FieldFileuploadDefinition |
FieldImguploadDefinition |
FieldTableDefinition;
