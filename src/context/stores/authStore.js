import { flow, makeAutoObservable } from 'mobx';
import ApiService from '../../common/api';

class AuthStore {
  isLoggedIn = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      onLogIn: flow,
    });
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // Using flow and generator here as this is typically an async situation
  // (although it isn't in this simulation)
  *onLogIn(loginData) {
    const { username, password } = loginData;

    yield this.setIsLoading(true);
    try {
      const response = yield ApiService.simulateAuthentication(
        username,
        password,
      );

      this.setIsLoggedIn(response);
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      yield this.setIsLoading(false);
    }
  }
}

export default AuthStore;
