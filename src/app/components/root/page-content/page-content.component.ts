import { Component, inject, OnInit } from '@angular/core';
import { RootStateService } from '../shared/root-state/root-state.service';
import { Subject, take, takeUntil } from 'rxjs';
import { PageNoteService } from '../shared/service/page-note.service';
import { PageNoteModel } from '../shared/model/page-note.model';
import { PageStateService } from '../shared/root-state/page-state.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  public isLoad: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();
  private pageState = inject(PageStateService);

  constructor(public rootState: RootStateService, private pageNoteService: PageNoteService) {
  }

  public ngOnInit(): void {
    this.rootState.currentPageId$.subscribe(id => {
      if (id) {
        this.pageState.contentLoad = true;
        this.isLoad = true;
        this.pageNoteService.getPageNote(id)
          .pipe(take(1), takeUntil(this.unsubscribe))
          .subscribe((page: PageNoteModel) => {
              this.pageState.setTitlePage(page);
              this.pageState.contentLoad = false;
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
