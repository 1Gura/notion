import { AuthModel } from './auth.model';

export class RegisterModel extends AuthModel {
  public userName: string = '';
  public repeatPassword: string = '';

  constructor() {
    super();
  }
}
