import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../../shared/model/user.model';
import { RootStateService } from '../root/shared/root-state/root-state.service';
import { Subject, takeUntil } from 'rxjs';
import { PageNoteService } from '../root/shared/service/page-note.service';
import { PageNoteModel } from '../root/shared/model/page-note.model';
import { MatDialog } from '@angular/material/dialog';
import { NewPageFormComponent } from '../shared/common/new-page-form/new-page-form.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public userInfo: UserModel = new UserModel();
  public listPageNote: PageNoteModel[] = [];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public rootState: RootStateService,
              private pageNoteService: PageNoteService,
              private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.rootState._user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: UserModel) => this.userInfo = data);
    this.pageNoteService.getPageNote()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: PageNoteModel[]) => {
        this.listPageNote = data;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  public openDialog(): void {
    const dialogRef = this.dialog.open(NewPageFormComponent, {
      data: {userName: this.rootState._user.value.userName}
    });

    dialogRef.afterClosed().subscribe(result => {


    });

  }
}
