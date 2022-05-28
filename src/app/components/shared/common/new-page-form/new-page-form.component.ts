import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserInfoInterface } from '../../../../shared/interfaces/user-info.interface';
import { BaseTextFieldComponent } from '../../../root/shared/notion-element/components/base-text-field/base-text-field.component';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-new-page-form',
  templateUrl: './new-page-form.component.html',
  styleUrls: ['./new-page-form.component.scss']
})
export class NewPageFormComponent implements OnInit {
  public observerViewChild: BehaviorSubject<BaseTextFieldComponent[]> =
    new BehaviorSubject<BaseTextFieldComponent[]>([]);
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public dialogRef: MatDialogRef<NewPageFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInfoInterface,) {
  }

  public ngOnInit(): void {
    this.observerViewChild
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: BaseTextFieldComponent[]) => {
      });
  }

  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: BaseTextFieldComponent[] = this.observerViewChild.value;
      arr.splice(indexTextElement + 1, 0, new BaseTextFieldComponent());
      this.observerViewChild.next(arr);
    }
  }
}
