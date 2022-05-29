import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseTextFieldComponent } from '../base-text-field/base-text-field.component';
import { RootStateService } from '../../../root-state/root-state.service';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';
import { PageNoteModel } from '../../../model/page-note.model';
import { ContentBaseModel } from '../../../model/content-base.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() public pageNote: PageNoteModel = new PageNoteModel();
  public titleFormGroup: TextFieldFormGroup = new TextFieldFormGroup();
  public contentFormGroup: TextFieldFormGroup[] = [];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public rootState: RootStateService) {
  }

  public ngOnInit(): void {
    this.rootState.titlePage.next(new BaseTextFieldComponent());
  }


  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: ContentBaseModel[] = this.rootState.observerViewChild;
      arr.splice(indexTextElement + 1, 0, new ContentBaseModel());
      this.rootState.observerViewChild = arr;
    }
  }

}
