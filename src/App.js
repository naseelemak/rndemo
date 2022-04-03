import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'common/setup/Routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
