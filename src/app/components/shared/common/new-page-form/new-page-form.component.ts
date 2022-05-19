import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserInfoInterface } from '../../../../shared/interfaces/user-info.interface';
import {
  BaseTextFieldModel
} from '../../../root/shared/notion-element/models/base-text-field.model';

@Component({
  selector: 'app-new-page-form',
  templateUrl: './new-page-form.component.html',
  styleUrls: ['./new-page-form.component.scss']
})
export class NewPageFormComponent {
  @ViewChild('title') public title: ElementRef | undefined;
  @ViewChild('textArea') public textArea: ElementRef | undefined;
  //Тут вместо any попробовать создать базовый класс от которого будут
  // наследоваться все эелементы из библиотке компонентов для Notion
  public listItemPage: any[] = [];

  constructor(public dialogRef: MatDialogRef<NewPageFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInfoInterface,) {
  }

  public setFocus(event: any): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      this.textArea?.nativeElement.focus();
    }
  }

  public newTextField(event: KeyboardEvent): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      debugger
      this.listItemPage.unshift(new BaseTextFieldModel());
    }
  }
}
