import { Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { PageNoteModel } from '../model/page-note.model';
import { TextFieldFormGroup } from '../form-group/text-field.form-group';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public contentList: TextFieldFormGroup[] = [];
  public titlePage: TextFieldFormGroup = new TextFieldFormGroup();
  public listPageNote: PageNoteModel[] = [];
  private num: number = Math.random();

  constructor() {
  }
}
