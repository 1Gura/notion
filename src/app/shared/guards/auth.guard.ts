import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    // @ts-ignore
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const s = await this.authService.isAuth().toPromise();
    if (s) {
      return true;
    } else {
      this.router.navigate(['../login']);
      return false;
    }
  }
}
