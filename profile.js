import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile Page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});