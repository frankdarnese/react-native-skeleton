/**
 * React Native App Skeleton
 * https://github.com/FDarnese/react-native-skeleton
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class react_native_skeleton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./app/assets/images/react-native-logo.png')}
        style={{width: 200, height: 200}} />
        <Text style={styles.welcome}>
          Welcome to
        </Text>
        <Text style={styles.title}>
          React Native Skeleton!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61dafb',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 0,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_skeleton', () => react_native_skeleton);
