import { FormControl } from '@angular/forms';
import { TypeElementEnum } from '../notion-element/shared/type-element.enum';
import { BaseTextFieldFormGroup } from './base-text-field.form-group';

export class TextFieldFormGroup extends BaseTextFieldFormGroup {
  constructor() {
    super({
      type: new FormControl(TypeElementEnum.BaseTextField),
      pageNoteId: new FormControl(0)
    });
  }
}
