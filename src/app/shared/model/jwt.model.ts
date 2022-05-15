export class JwtModel {
  public token: string = '';
  public refreshToken: string = '';
  public userEmail: string = '';

  constructor(token: string = '', refreshToken: string = '', userEmail: string = '') {
    this.token = token;
    this.refreshToken = refreshToken;
    this.userEmail = userEmail;
  }
}
