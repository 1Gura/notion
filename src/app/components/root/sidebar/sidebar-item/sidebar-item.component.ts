import { Component, Input } from '@angular/core';
import { RootStateService } from '../../shared/root-state/root-state.service';
import { PageNoteModel } from '../../shared/model/page-note.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() public page: PageNoteModel = new PageNoteModel();

  constructor(public rootState: RootStateService) {
  }

  public setCurrentIdPage(currentPageId: number): void {
    this.rootState.currentPageId$.next(currentPageId);
  }
}
