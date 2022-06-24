import { FormControl, FormGroup } from '@angular/forms';
import { TypeElementEnum } from '../notion-element/shared/type-element.enum';

export class BaseTextFieldFormGroup extends FormGroup {
  constructor(controls: { type: FormControl<TypeElementEnum | null>; pageNoteId: FormControl<number | null> }) {
    super({
      id: new FormControl(0),
      content: new FormControl(''),
      ...controls
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
