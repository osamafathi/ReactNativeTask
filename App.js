import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Login from './App/LoginPage'
import RootNavigator from './App/RootNavigator'


export default class App extends React.Component { 
  render() {
    return (
      
      //  <Text style={{color:'green',fontSize:30,top:-220,fontWeight:'bold'}}>Login</Text> 
      //   {/* <Login name="Hi Omar" Age="15" ></Login>  */}
        <RootNavigator />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxText:{
    color:'green',
    alignItems:'center'
  }
});
