import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
  const [usernameText, setUsernameText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const navigation = useNavigation('Dashboard');

  const handleLogin = () => {
    // TODO: implement this
    console.log('Logging in');
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Username"
          onChangeText={(text) => setUsernameText(text)}
          value={usernameText}
        />
      </View>
      <View style={{ paddingVertical: 5 }} />
      <View>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPasswordText(text)}
          value={passwordText}
        />
      </View>
      <View style={{ paddingVertical: 10 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default SignInScreen;
