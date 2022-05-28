import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { RegisterModel } from '../../model/register.model';
import { JwtResponseModel } from '../../model/jwt-response.model';
import { AuthModel } from '../../model/auth.model';
import { plainToClass } from 'class-transformer';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { UserModel } from '../../model/user.model';
import { JwtModel } from '../../model/jwt.model';
import { RequestTokenModel } from '../../model/request-token.model';


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
    const userEmail: string = this.getJwtInfo().userEmail;
    return this.getParameters('getUserInfo', {userEmail})
      .pipe(
        map((data: UserModel) => {
          return !!(data.email && data.userName);
        })
      );
  }

  public getUserInfo(): Observable<UserModel> {
    const userEmail: string = this.getJwtInfo().userEmail;
    return this.getParameters('getUserInfo', {userEmail})
      .pipe(map((data: UserModel) => plainToClass(UserModel, data)));
  }

  public setJwtInfo(jwtInfo: JwtResponseModel): void {
    localStorage.setItem('token', jwtInfo.token);
    localStorage.setItem('refreshToken', jwtInfo.refreshToken);
    localStorage.setItem('userEmail', jwtInfo.userEmail);
    this.token = jwtInfo.token;
    this.refreshToken = jwtInfo.refreshToken;
    this.user.email = jwtInfo.userEmail;
  }

  public getJwtInfo(): JwtModel {
    const token: string | null = localStorage.getItem('token');
    const refreshToken: string | null = localStorage.getItem('refreshToken');
    const userEmail: string | null = localStorage.getItem('userEmail');
    return new JwtModel(
      token ? token : '',
      refreshToken ? refreshToken : '',
      userEmail ? userEmail : '');
  }

  public register(registerForm: RegisterModel): Observable<JwtResponseModel> {
    return this.post('register', registerForm).pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public login(loginForm: AuthModel): Observable<JwtResponseModel> {
    return this.post('login', loginForm)
      .pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public getRefreshToken(requestToken: RequestTokenModel): Observable<JwtResponseModel> {
    return this.post('RefreshToken', requestToken)
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
