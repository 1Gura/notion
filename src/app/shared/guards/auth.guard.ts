import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { catchError, lastValueFrom, Observable, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtModel } from '../model/jwt.model';
import { RequestTokenModel } from '../model/request-token.model';
import { JwtResponseModel } from '../model/jwt-response.model';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    // @ts-ignore
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth$: Observable<boolean> = this.authService.isAuth()
      .pipe(catchError((error: HttpErrorResponse) => {
        const jwtInfo: JwtModel = this.authService.getJwtInfo();
        if (jwtInfo.token && jwtInfo.refreshToken && jwtInfo.userEmail) {
          this.authService.getRefreshToken(new RequestTokenModel(jwtInfo.token, jwtInfo.refreshToken))
            .pipe(take(1))
            .subscribe((data: JwtResponseModel) => {
              if (data) {
                this.authService.setJwtInfo(data);
                this.router.navigate(['./root']);
              }
            });
        }
        this.router.navigate(['./authorization/login']);
        return throwError(() => error);
      }));
    const isAuth: boolean = await lastValueFrom(isAuth$);
    if (isAuth) {
      return true;
    } else {
      this.router.navigate(['./authorization/login']);
      return false;
    }
  }
}
