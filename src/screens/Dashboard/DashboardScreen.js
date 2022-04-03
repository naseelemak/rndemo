import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useStore } from 'common/setup/rootStore';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

const DashboardScreen = () => {
  const { authStore } = useStore().rootStore;

  const handleLogOut = () => {
    console.log('Logging in');
    authStore.onLogOut();
  };

  return (
    <View style={styles.container}>
      <Button
        title="Log Out"
        onPress={handleLogOut}
        disabled={authStore.isLoading}
      />
    </View>
  );
};

const DashboardWrapped = observer(DashboardScreen);

export default DashboardWrapped;
