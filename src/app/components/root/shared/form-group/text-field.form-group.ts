import { FormControl, FormGroup } from '@angular/forms';
import { TypeContentEnum } from '../enum/type-content.enum';

export class TextFieldFormGroup extends FormGroup {
  constructor() {
    super({
      type: new FormControl(TypeContentEnum.default),
      content: new FormControl('')
    });
  }

  public get type(): TypeContentEnum {
    return this.get('type')?.value;
  }
}
