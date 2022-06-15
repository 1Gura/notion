import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

export class AuthorizeFormGroup extends UntypedFormGroup {

  constructor() {
    super({
      email: new UntypedFormControl('', [Validators.email, Validators.required]),
      password: new UntypedFormControl('', [Validators.minLength(6), Validators.required]),
      repeatPassword: new UntypedFormControl(''),
      name: new UntypedFormControl('')
    });
  }
}
