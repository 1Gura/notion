import { NgModule } from '@angular/core';

import { NewPageFormComponent } from './new-page-form.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RootModule } from '../../../root/root.module';
import {
  BaseNotionComponentModule
} from '../../../root/shared/notion-element/components/base-notion-component.module';


@NgModule({
  declarations: [
    NewPageFormComponent,
  ],
  imports: [
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    FlexModule,
    CommonModule,
    RootModule,
    BaseNotionComponentModule,
  ],
  exports: [NewPageFormComponent]
})

export class NewPageFormModule {
}
