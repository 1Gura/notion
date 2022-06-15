import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export class TextFieldFormGroup extends UntypedFormGroup {
  constructor() {
    super({
      content: new UntypedFormControl('')
    });
  }

  public get content(): string {
    return this.get('content')?.value;
  }

}
