import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, Observable, Subject } from 'rxjs';
import { RegisterModel } from '../../model/register.model';
import { JwtResponseModel } from '../../model/jwt-response.model';
import { AuthModel } from '../../model/auth.model';
import { plainToClass } from 'class-transformer';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { UserModel } from '../../model/user.model';
import { JwtModel } from '../../model/jwt.model';
import { AuthGuard } from '../../guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  public user: UserModel = new UserModel();
  public token: string | null = '';
  public refreshToken: string | null = '';


  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://localhost:7151/api/AuthManagement');
  }

  public isAuth(): Observable<boolean> {
    return this.getParameters('getUserInfo', {userEmail: this.user.email});
  }

  public getUserInfo(): Observable<UserModel> {
    return this.getParameters('getUserInfo', {userEmail: this.user.email})
      .pipe(map((data: UserModel) => plainToClass(UserModel, data)));
  }

  public setJwtInfo(jwtInfo: JwtResponseModel): void {
    localStorage.setItem('token', jwtInfo.token);
    localStorage.setItem('refreshToken', jwtInfo.refreshToken);
    this.token = jwtInfo.token;
    this.refreshToken = jwtInfo.refreshToken;
    this.user.email = jwtInfo.userEmail;
  }

  public getJwtInfo(jwtInfo: JwtResponseModel): JwtModel {
    // const token: string | null = localStorage.getItem('token');
    // const refreshToken: string | null = localStorage.getItem('refreshToken');
    // return new JwtModel(token ? token : '', refreshToken ? refreshToken : '');
    return new JwtModel();
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

  public emailExists(email: string): Observable<boolean | null> {
    return this.checkUniqEmail(email).pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((response) => {
        return response;
      })
    );
  }

  public uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => {
          return exists ? {emailExists: true} : null;
        }),
      );
    };
  }
}
