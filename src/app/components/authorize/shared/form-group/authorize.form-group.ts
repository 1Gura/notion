import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AuthorizeFormGroup extends FormGroup {

  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      repeatPassword: new FormControl(''),
      name: new FormControl('')
    });
  }
}
