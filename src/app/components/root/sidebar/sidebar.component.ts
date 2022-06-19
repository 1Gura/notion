import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../../../shared/model/user.model';
import { RootStateService } from '../shared/root-state/root-state.service';
import { Subject, take, takeUntil } from 'rxjs';
import { PageNoteService } from '../shared/service/page-note.service';
import { PageNoteModel } from '../shared/model/page-note.model';
import { MatDialog } from '@angular/material/dialog';
import { NewPageFormComponent } from '../../shared/common/new-page-form/new-page-form.component';
import { PageStateService } from '../shared/root-state/page-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  pageState = inject(PageStateService);
  public userInfo: UserModel = new UserModel();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public rootState: RootStateService,
              private pageNoteService: PageNoteService,
              private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.rootState._user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: UserModel) => this.userInfo = data);
    this.pageNoteService.getPageNotes()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: PageNoteModel[]) => {
        this.rootState.listPageNote = data;
      });

  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public createNewPage(): void {
    this.openDialog();
  }

  private openDialog(): void {
    this.rootState.resetStateForm();
    this.rootState.isNewPage = true;
    const dialogRef = this.dialog.open(NewPageFormComponent, {
      data: {userName: this.rootState._user.value.userName}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.rootState.isNewPage && this.pageState.titlePage.content) {
        const pageNote: PageNoteModel = new PageNoteModel();
        pageNote.title = this.pageState.titlePage.content;
        pageNote.content = this.pageState.getContentList();
        this.pageNoteService.createPageNote(pageNote)
          .pipe(take(1), takeUntil(this.unsubscribe))
          .subscribe((data: PageNoteModel) => {
            this.rootState.listPageNote.push(data);
          });
        this.rootState.resetStateForm();
      }
    });
  }
}
