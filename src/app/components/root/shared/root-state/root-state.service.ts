import { Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { BaseTextFieldComponent } from '../notion-element/components/base-text-field/base-text-field.component';
import { ContentBaseModel } from '../model/content-base.model';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public observerViewChild: ContentBaseModel[] = [];
  public titlePage: BehaviorSubject<BaseTextFieldComponent>
    = new BehaviorSubject<BaseTextFieldComponent>(new BaseTextFieldComponent());

  constructor() {
  }
}
