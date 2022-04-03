import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'screens/Login';
import DashboardScreen from 'screens/Dashboard';
import { useStore } from 'context/stores/rootStore';
import { observer } from 'mobx-react-lite';
import StandardButton from 'common/ui/StandardButton';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { authStore } = useStore().rootStore;

  return (
    <NavigationContainer>
      {!authStore.isLoggedIn ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              title: 'Car Involved Movies',
              headerRight: () => (
                <StandardButton
                  label="Log Out"
                  onPress={() => authStore.onLogOut()}
                  isDisabled={authStore.isLoading}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const RoutesWrapped = observer(Routes);

export default RoutesWrapped;
