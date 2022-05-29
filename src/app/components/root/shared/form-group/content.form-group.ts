import { FormControl, FormGroup } from '@angular/forms';

export class ContentFormGroup extends FormGroup {
  constructor() {
    super({
      content: new FormControl('')
    });
  }
}
