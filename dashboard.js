import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,color:'red'}}>Welcome To Dashboard!</Text>
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