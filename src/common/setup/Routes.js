import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from 'screens/SignIn';
import DashboardScreen from 'screens/Dashboard';
import { useStore } from './rootStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { authStore } = useStore().rootStore;

  console.log('rootStore', toJS(authStore.isLoggedIn));

  return (
    <NavigationContainer>
      {!authStore.isLoggedIn ? (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ name: 'SignIn' }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ name: 'Dashboard' }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const RoutesWrapped = observer(Routes);

export default RoutesWrapped;
