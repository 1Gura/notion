import { FormControl, FormGroup } from '@angular/forms';

export class TextFieldFormGroup extends FormGroup {
  constructor() {
    super({
      content: new FormControl('')
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
