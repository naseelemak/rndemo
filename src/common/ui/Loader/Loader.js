import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#999999" />
  </View>
);

export default Loader;
