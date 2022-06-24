import { FormControl, FormGroup } from '@angular/forms';
import { TextFieldFormGroup } from './text-field.form-group';

export class PageFormGroup extends FormGroup {
  constructor() {
    super({
      id: new FormControl(0),
      title: new TextFieldFormGroup(),
      content: new FormControl([]),
      userId: new FormControl(0)
    });
  }
}
