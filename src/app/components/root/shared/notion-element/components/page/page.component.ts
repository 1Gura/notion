import { Component, inject } from '@angular/core';
import { RootStateService } from '../../../root-state/root-state.service';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';
import { PageStateService } from '../../../root-state/page-state.service';

@Component({
  selector: ' app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  pageState = inject(PageStateService);

  constructor(public rootState: RootStateService) {
  }


  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: TextFieldFormGroup[] = this.pageState.contentList;
      arr.splice(indexTextElement + 1, 0, new TextFieldFormGroup());
      this.pageState.contentList = arr;
    }
  }
}
