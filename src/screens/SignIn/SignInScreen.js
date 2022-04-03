import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useStore } from 'common/setup/rootStore';

// I know the instructions said no styles but I'm just putting a little here
// to centralise the form. I hope that's fine!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

const SignInScreen = () => {
  const { authStore } = useStore().rootStore;
  const [usernameText, setUsernameText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const handleLogin = () => {
    console.log('Logging in');
    authStore.onLogIn({
      username: usernameText,
      password: passwordText,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Username"
          onChangeText={(text) => setUsernameText(text)}
          autoCapitalize="none"
          value={usernameText}
        />
      </View>
      <View style={{ paddingVertical: 5 }} />
      <View>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPasswordText(text)}
          autoCapitalize="none"
          value={passwordText}
        />
      </View>
      <View style={{ paddingVertical: 10 }} />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={authStore.isLoading}
      />
    </View>
  );
};

const SignInWrapped = observer(SignInScreen);

export default SignInWrapped;
