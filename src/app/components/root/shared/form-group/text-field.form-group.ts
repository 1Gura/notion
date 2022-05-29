import { FormControl, FormGroup } from '@angular/forms';

export class TextFieldFormGroup extends FormGroup {
  constructor() {
    super({content: new FormControl('')});
  }
}
