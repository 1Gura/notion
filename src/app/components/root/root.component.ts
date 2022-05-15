import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Subject, take, takeUntil } from 'rxjs';
import { UserModel } from '../../shared/model/user.model';
import { RootStateService } from './shared/root-state/root-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private rootState: RootStateService) {
  }

  public ngOnInit(): void {
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

}
