import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeFormGroup } from '../shared/form-group/authorize.form-group';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { plainToClass } from 'class-transformer';
import { AuthModel } from '../../../shared/model/auth.model';
import { Subject, take, takeUntil } from 'rxjs';
import { JwtResponseModel } from '../../../shared/model/jwt-response.model';
import { SnackBarService } from '../../../shared/services/snack-bar-service/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: AuthorizeFormGroup = new AuthorizeFormGroup();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router, private authService: AuthService, private snackBarService: SnackBarService) {
  }

  public routeRegister(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['../register']);
  }

  public submitLogin(): void {
    if (this.loginForm.valid) {
      const loginInfo: AuthModel = new AuthModel(this.loginForm.value.email, this.loginForm.value.password);
      this.authService.login(loginInfo)
        .pipe(take(1), takeUntil(this.unsubscribe))
        .subscribe((data: JwtResponseModel) => {
          this.authService.setJwtInfo(data);
          this.router.navigate(['../']);
        });
      return;
    }
    this.loginForm.markAllAsTouched();
    this.snackBarService.openSnackBar('Форма не валидна');
  }
}
