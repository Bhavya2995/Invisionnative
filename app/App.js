import React, { Component } from 'react';
import {StatusBar} from 'react-native'
import {
RootStack
} from './config/router';


export default class App extends Component{
  componentDidMount(){
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <RootStack />
    );
  }
}

