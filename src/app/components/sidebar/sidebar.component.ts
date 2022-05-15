import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../../shared/model/user.model';
import { RootStateService } from '../root/shared/root-state/root-state.service';
import { Subject, take, takeUntil } from 'rxjs';
import { PageNoteService } from '../root/shared/service/page-note.service';
import { PageNoteModel } from '../root/shared/model/page-note.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public userInfo: UserModel = new UserModel();
  public listPageNote: PageNoteModel[] = [];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private rootState: RootStateService, private pageNoteService: PageNoteService) {
  }

  public ngOnInit(): void {
    this.rootState._user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: UserModel) => this.userInfo = data);
    this.pageNoteService.getPageNote()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: PageNoteModel[]) => {
        debugger
        console.log(data);
        this.listPageNote = data;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
