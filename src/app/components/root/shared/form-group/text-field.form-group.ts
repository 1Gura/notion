import { FormControl, FormGroup } from '@angular/forms';
import { TypeElementEnum } from '../notion-element/shared/type-element.enum';

export class TextFieldFormGroup extends FormGroup {
  constructor() {
    super({
      id: new FormControl(0),
      type: new FormControl(TypeElementEnum.TextField),
      content: new FormControl(''),
      userId: new FormControl(0)
    });
  }

  public get content(): string {
    return this.get('content')?.value;
  }

  public getViewContent(countSymbols: number = 20): string {
    return `${this.get('content')?.value.length < countSymbols
      ? this.get('content')?.value
      : this.get('content')?.value.slice(0, countSymbols - 1) + '...'}`;
  }
}
