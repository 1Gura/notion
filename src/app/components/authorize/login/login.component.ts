import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeFormGroup } from '../shared/form-group/authorize.form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: AuthorizeFormGroup = new AuthorizeFormGroup();

  constructor(private router: Router) {
    this.loginForm.get('email')?.valueChanges.subscribe(value => {
      console.log(this.loginForm.get('email'));
    });
  }

  public routeRegister(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['../register']);
  }

  public submitLogin(): void {

  }
}
