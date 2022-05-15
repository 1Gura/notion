import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { JwtModel } from '../model/jwt.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenInfo: JwtModel = this.authService.getJwtInfo();
    const clone = request.clone({
      headers: request.headers.append(`Authorization`, `Bearer ${tokenInfo.token}`)
    });
    return next.handle(clone);
  }
}
