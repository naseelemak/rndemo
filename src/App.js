import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'common/setup/Routes';
import { StoreProvider } from './common/setup/rootStore';

const App = () => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
