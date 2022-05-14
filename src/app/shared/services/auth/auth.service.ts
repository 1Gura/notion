import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { RegisterModel } from '../../model/register.model';
import { JwtResponseModel } from '../../model/jwt-response.model';
import { AuthModel } from '../../model/auth.model';
import { plainToClass } from 'class-transformer';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://localhost:7151/api/AuthManagement/');
  }

  public register(registerForm: RegisterModel): Observable<JwtResponseModel> {
    return this.post('register', registerForm).pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public login(loginForm: AuthModel): Observable<JwtResponseModel> {
    return this.post('login', loginForm)
      .pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public checkUniqEmail(email: string): Observable<any> {
    return this.getParameters('UniqEmail', {email});
  }

  emailExists(email: string): Observable<boolean | null> {
    return this.checkUniqEmail(email).pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((response) => {
        return response;
      })
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => {
          return exists ? {emailExists: true} : null;
        }),
      );
    };
  }
}
