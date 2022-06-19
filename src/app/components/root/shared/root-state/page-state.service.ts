import { Injectable } from '@angular/core';
import { TextFieldFormGroup } from '../form-group/text-field.form-group';
import { ContentBaseModel } from '../model/content-base.model';

@Injectable()
export class PageStateService {
  public titlePage: TextFieldFormGroup = new TextFieldFormGroup();
  public contentList: TextFieldFormGroup[] = [];
  public contentLoad: boolean = false;

  constructor() {
  }

  public getContentList(): ContentBaseModel[] {
    return this.contentList.map((item: TextFieldFormGroup) =>
      new ContentBaseModel(item.content));
  }

  public setContentList(contents: ContentBaseModel[]): void {
    this.contentList = contents.map((item: ContentBaseModel) => {
        const textField: TextFieldFormGroup = new TextFieldFormGroup();
        textField.get('content')?.setValue(item.content);
        return textField;
      }
    );
  }
}
