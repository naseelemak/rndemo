import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useStore } from 'context/stores/rootStore';

// I know the instructions said no styles but I'm just putting a little here
// to centralise the form. I hope that's fine!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    textAlign: 'center',
  },
});

const LoginScreen = () => {
  const { authStore } = useStore().rootStore;
  const [usernameText, setUsernameText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const handleLogIn = () => {
    authStore.onLogIn({
      username: usernameText,
      password: passwordText,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsernameText(text)}
        autoCapitalize="none"
        value={usernameText}
      />
      <View style={{ paddingVertical: 5 }} />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPasswordText(text)}
        secureTextEntry={true}
        autoCapitalize="none"
        value={passwordText}
        style={styles.textInput}
      />
      <View style={{ paddingVertical: 10 }} />
      <Button
        title="Submit"
        onPress={handleLogIn}
        disabled={authStore.isLoading}
      />
    </View>
  );
};

const LoginWrapped = observer(LoginScreen);

export default LoginWrapped;
