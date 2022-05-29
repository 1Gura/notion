import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
    this.pageNote.title = new ContentBaseModel('Hello');
    this.pageNote.content = [new ContentBaseModel('12'), new ContentBaseModel('qwe')];
    debugger
    this.rootState.titlePage = this.pageNote.title;
    this.rootState.contentList = this.pageNote.content;
  }


  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: ContentBaseModel[] = this.rootState.contentList;
      arr.splice(indexTextElement + 1, 0, new ContentBaseModel());
      this.rootState.contentList = arr;
    }
  }

}
