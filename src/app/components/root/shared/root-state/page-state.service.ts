import { Injectable } from '@angular/core';
import { TextFieldFormGroup } from '../form-group/text-field.form-group';
import { ContentBaseModel } from '../model/content-base.model';
import { PageNoteModel } from '../model/page-note.model';
import { BaseTextFieldFormGroup } from '../form-group/base-text-field.form-group';
import { PageFormGroup } from '../form-group/page.form-group';

@Injectable()
export class PageStateService {
  public titlePage: BaseTextFieldFormGroup = new TextFieldFormGroup();
  public contentList: TextFieldFormGroup[] = [];
  public contentLoad: boolean = false;
  public pageFormGroup: PageFormGroup = new PageFormGroup();

  constructor() {
  }

  public getContentList(): ContentBaseModel[] {
    return this.contentList.map((item: TextFieldFormGroup) =>
      new ContentBaseModel(item.content));
  }

  public setTitlePage(pageNote: PageNoteModel): void {
    this.titlePage.get('content')?.setValue(pageNote.title);
    this.setContentList(pageNote.content);
  }

  public setContentList(contents: ContentBaseModel[]): void {
    this.contentList = contents.map((item: ContentBaseModel) => {
        const textField: TextFieldFormGroup = new TextFieldFormGroup();
        textField.patchValue(item);
        return textField;
      }
    );
  }
}
