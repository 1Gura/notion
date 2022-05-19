import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTextFieldComponent } from './base-text-field/base-text-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseTextFieldComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [BaseTextFieldComponent]
})
export class BaseNotionComponentModule {
}
