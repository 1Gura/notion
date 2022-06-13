import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Subject, take, takeUntil } from 'rxjs';
import { UserModel } from '../../shared/model/user.model';
import { RootStateService } from './shared/root-state/root-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private rootState: RootStateService,
    private router: Router) {
  }

  public ngOnInit(): void {
    // const jwtInfo: JwtModel = this.authService.getJwtInfo();
    // if (jwtInfo.token && jwtInfo.refreshToken && jwtInfo.userEmail) {
    //   this.authService.getRefreshToken(new RequestTokenModel(jwtInfo.token, jwtInfo.refreshToken))
    //     .pipe(take(1))
    //     .subscribe((data: JwtResponseModel) => {
    //       if (data) {
    //         debugger
    //         this.authService.setJwtInfo(data);
    //         this.router.navigate(['./root']);
    //       }
    //     });
    // }

    this.authService.getUserInfo()
      .pipe(
        take(1),
        takeUntil(this.unsubscribe))
      .subscribe((data: UserModel) => {
        this.rootState._user.next(data);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addEmoji(event: any) {
    console.log(event);
  }


}
