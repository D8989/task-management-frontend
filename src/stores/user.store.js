import { observable, action } from 'mobx';

export default class UserStore {
  @observable userName = null;

  constructor(authService) {
    this.authService = authService;
  }

  @action
  async signin(userName, password) {
    this.userName = await this.authService.signin(userName, password);
  }

  @action
  async signup(userName, password) {
    return this.authService.signup(userName, password);
  }

  @action
  signout() {
    this.userName = null;
    this.authService.removeToken();
  }
}
