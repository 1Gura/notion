export class RequestTokenModel {
  public token: string | null = '';
  public refreshToken: string | null = '';

  constructor(token: string | null, refreshToken: string | null) {
    this.token = token;
    this.refreshToken = refreshToken;
  }

}
