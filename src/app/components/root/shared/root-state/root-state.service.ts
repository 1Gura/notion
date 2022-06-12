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
  private _currentIdPage: number = 0;

  constructor() {
  }

  private _isNewPage: boolean = false;

  public get isNewPage(): boolean {
    return this._isNewPage;
  }

  public set isNewPage(isNewPage: boolean) {
    isNewPage ? this._isNewPage = isNewPage : this._isNewPage = false;
  }

  public get currentPageId(): number {
    return this._currentIdPage;
  }

  public set currentPageId(currentPageId: number) {
    currentPageId ? this._currentIdPage = currentPageId : this._currentIdPage = 0;
  }

  public resetStateForm(): void {
    this._isNewPage = false;
    this.titlePage = new TextFieldFormGroup();
    this.contentList = [];
  }
}

