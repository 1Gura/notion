import { BaseModel } from './base.model';

export class JwtResponseModel extends BaseModel {
  public token: string = '';
  public refreshToken: string = '';
  public success: boolean = false;
  public errors: string[] = [];
  public userEmail: string = '';
}
