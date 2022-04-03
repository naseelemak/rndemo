import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from 'screens/SignIn';
import DashboardScreen from 'screens/Dashboard';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ name: 'SignIn' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ name: 'Dashboard' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
