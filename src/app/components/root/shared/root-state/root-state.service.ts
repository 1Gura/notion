import { Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { ContentBaseModel } from '../model/content-base.model';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public contentList: ContentBaseModel[] = [];
  public titlePage: ContentBaseModel = new ContentBaseModel();

  constructor() {
  }
}
