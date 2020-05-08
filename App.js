import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Mid from './components/Mid'
import Body from './components/Body'


export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <Mid></Mid>
     <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
