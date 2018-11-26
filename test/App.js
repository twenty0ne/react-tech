/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Watch from './src/watch';
import Weather from './src/weather';
import Twitter from './src/twitter';
import MyMap from './src/map';
import Tweet from './src/tweet';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  
    // this.state = {
    //   days:[{
    //   }]
    // };
  }

  render() {
    return (
      <Tweet />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
