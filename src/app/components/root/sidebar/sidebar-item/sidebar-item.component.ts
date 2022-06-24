import { Component, Input } from '@angular/core';
import { RootStateService } from '../../shared/root-state/root-state.service';
import { PageNoteModel } from '../../shared/model/page-note.model';
import { PageNoteShortModel } from '../../shared/model/page-note-short.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() public page: PageNoteShortModel = new PageNoteModel();

  constructor(public rootState: RootStateService) {
  }

  public setCurrentIdPage(currentPageId: number): void {
    this.rootState.currentPageId$.next(currentPageId);
  }
}
