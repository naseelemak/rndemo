import AsyncStorage from '@react-native-async-storage/async-storage';
import { flow, makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import ApiService from '../../common/api';

class AuthStore {
  isLoggedIn = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      onLogIn: flow,
    });
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['isLoggedIn'],
      storage: AsyncStorage,
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
      console.error(error);
    } finally {
      yield this.setIsLoading(false);
    }
  }

  *onLogOut() {
    yield this.setIsLoading(true);
    try {
      const response = yield ApiService.simulateLogOut();
      if (response === false) {
        console.log(
          "Something went wrong with log out on backend, but don't worry about interceptChange.",
        );
      }

      this.setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    } finally {
      yield this.setIsLoading(false);
    }
  }
}

export default AuthStore;
