import { Injectable } from '@angular/core';
import { UserModel } from '../../../../shared/model/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RootStateService {
  public _user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());

  constructor() {
  }

  // public set user(user: UserModel) {
  //   this._user = user;
  // }
  //
  // public get user(): UserModel {
  //   return this._user;
  // }
}
