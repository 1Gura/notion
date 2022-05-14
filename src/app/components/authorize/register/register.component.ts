import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeFormGroup } from '../shared/form-group/authorize.form-group';
import { Validators } from '@angular/forms';
import { merge, Subject, takeUntil } from 'rxjs';
import { SnackBarService } from '../../../shared/services/snack-bar-service/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: AuthorizeFormGroup = new AuthorizeFormGroup();
  public passwordCorrect: boolean = true;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router, private snackBar: SnackBarService) {
  }

  public ngOnInit(): void {
    this.initValidatorsRegisterForm();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  public routeLogin(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['../login']);
  }

  private initValidatorsRegisterForm(): void {
    this.registerForm.get('name')?.setValidators([Validators.required]);
    this.registerForm.get('repeatPassword')?.setValidators([Validators.minLength(6), Validators.required]);
    merge(
      this.registerForm.get('password')!.valueChanges,
      this.registerForm.get('repeatPassword')!.valueChanges)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.passwordCorrect = this.checkPassword();
      });
  }

  private checkPassword(): boolean {
    return this.registerForm.get('password')?.value ===
      this.registerForm.get('repeatPassword')?.value;
  }

  public submitRegister(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      return;
    }
    this.registerForm.markAllAsTouched();
    this.snackBar.openSnackBar('Форма не валидна');
  }
}

