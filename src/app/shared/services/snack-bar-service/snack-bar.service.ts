import { Injectable } from '@angular/core';
import { SnackBarComponent } from '../../../components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  public message: string = '';
  private durationInSeconds: number = 4;

  constructor(private _snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string) {
    this.message = message;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
