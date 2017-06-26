/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'

import RootScene from './src/RootScene';

export default class HelloWord extends PureComponent {
  render() {
    return (
        <RootScene />
    );
  }
}

AppRegistry.registerComponent('HelloWord', () => HelloWord);
