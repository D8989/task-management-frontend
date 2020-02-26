import { post } from 'axios';
import BaseHttpService from './base-http.service';

export default class AuthService extends BaseHttpService {
  async signin(userName, password) {
    const result = await post(`${this.BASE_URL}/auth/signin`, { userName, password });
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return result.data.userName;
  }

  async signup(userName, password) {
    await post(`${this.BASE_URL}/auth/signup`, { userName, password });
  }

  async signout() {
    this.removeToken();
  }
}
