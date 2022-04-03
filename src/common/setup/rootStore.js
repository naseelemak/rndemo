import React from 'react';
import AuthStore from 'context/stores/authStore';

class RootStore {
  constructor() {
    // Add additional domain stores here
    this.authStore = new AuthStore(this);
  }
}

const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ rootStore }}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);
