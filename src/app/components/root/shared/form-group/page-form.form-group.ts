import { inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { PageFormInterface } from '../interface/page-form.interface';

export class PageFormFormGroup {
  formBuilder = inject(NonNullableFormBuilder);

  constructor() {
  }

  public getPageFormGroup(): FormGroup {
    return this.formBuilder.group<PageFormInterface>({
      titlePage: '',
      contentList: [],
    });
  }
}
