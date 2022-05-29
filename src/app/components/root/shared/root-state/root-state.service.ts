import { Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { BaseTextFieldComponent } from '../notion-element/components/base-text-field/base-text-field.component';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public observerViewChild: BehaviorSubject<BaseTextFieldComponent[]> =
    new BehaviorSubject<BaseTextFieldComponent[]>([]);
  public titlePage: BehaviorSubject<BaseTextFieldComponent>
    = new BehaviorSubject<BaseTextFieldComponent>(new BaseTextFieldComponent());

  constructor() {
  }
}
