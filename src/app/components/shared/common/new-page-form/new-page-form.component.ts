import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserInfoInterface } from '../../../../shared/interfaces/user-info.interface';

@Component({
  selector: 'app-new-page-form',
  templateUrl: './new-page-form.component.html',
  styleUrls: ['./new-page-form.component.scss']
})
export class NewPageFormComponent {

  constructor(public dialogRef: MatDialogRef<NewPageFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInfoInterface,) {
  }

  public openPage(): void {
    this.dialogRef.close();
  }
}
