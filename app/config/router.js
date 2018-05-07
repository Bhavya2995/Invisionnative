import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import FirstPage from "../screens/FirstPage";
import SignUp from "../screens/SignUp";
import Tour from "../screens/Tour"
import SignIn from "../screens/SignIn"

export const RootStack = StackNavigator(
  {
    Main: {
      screen: FirstPage
    },
    SignUp: {
      screen: SignUp
    },
    Tour : {
        screen : Tour
    },
    SignIn : {
      screen : SignIn
    }
  },
  { initialRouteName: 'Main' }
);
