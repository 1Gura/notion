import { inject, Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ɵElement } from '@angular/forms';
import { PageFormInterface } from '../interface/page-form.interface';

@Injectable()
export class FormGeneratorService {
  private formBuilder = inject(NonNullableFormBuilder);

  constructor() {
  }

  public getPageFormGroup(): FormGroup<{ [K in keyof PageFormInterface]: ɵElement<PageFormInterface[K], never> }> {
    return this.formBuilder.group<PageFormInterface>({
      titlePage: '',
      contentList: [],
    });
  }
}
