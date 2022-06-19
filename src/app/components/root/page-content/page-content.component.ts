import { Component, OnInit } from '@angular/core';
import { RootStateService } from '../shared/root-state/root-state.service';
import { Subject, take, takeUntil } from 'rxjs';
import { PageNoteService } from '../shared/service/page-note.service';
import { PageNoteModel } from '../shared/model/page-note.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  public isLoad: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public rootState: RootStateService, private pageNoteService: PageNoteService) {
  }

  public ngOnInit(): void {
    this.rootState.currentPageId$.subscribe(id => {
      if (id) {
        this.rootState.contentLoad = true;
        this.isLoad = true;
        this.pageNoteService.getPageNote(id)
          .pipe(take(1), takeUntil(this.unsubscribe))
          .subscribe((data: PageNoteModel) => {
              this.rootState.titlePage.get('content')?.setValue(data.title);
              this.rootState.setContentList(data.content);
              this.rootState.contentLoad = false;
              this.isLoad = false;
            },
            () => {
            },
            () => {
              this.isLoad = false;
            });
      }
    });
  }
}
