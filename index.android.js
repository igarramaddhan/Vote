import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import home from './src/home';
import login from './src/login'
import testing from './src/testing'
import {StackNavigator} from 'react-navigation'
const App = StackNavigator({
    Login:{screen: login},
    Home:{screen: home}
}, {
    headerMode: 'none'
})
AppRegistry.registerComponent('Vote', () => App);
