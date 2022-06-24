import { inject, Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { TextFieldFormGroup } from '../form-group/text-field.form-group';
import { PageStateService } from './page-state.service';
import { PageNoteShortModel } from '../model/page-note-short.model';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public pageIsOpen: boolean = false;
  public listPageNote: PageNoteShortModel[] = [];
  public currentPageId$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private pageState = inject(PageStateService);
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

  public setCurrentPageId(currentPageId: number) {
    this.currentPageId$.next(currentPageId);
  }

  public resetStateForm(): void {
    this._isNewPage = false;
    this.currentPageId$.next(0);
    this.pageState.titlePage = new TextFieldFormGroup();
    this.pageState.contentList = [];
  }
}

