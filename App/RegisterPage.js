import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,AsyncStorage,Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Login from './LoginPage'
import RootNavigator from './RootNavigator'

export default class Register extends React.Component{
    constructor(props){
      super(props);
      this.state = { isShowingText:true,name:"",email:"",confirmPassword:"",password:"",jsonData : {
        "services": [
          { "id": 1, "name": "Meat",checked:false },
          { "id": 2, "name": "Chicken",checked:false },
          { "id": 3, "name": "Bread",checked:false },
          { "id": 4, "name": "Pepsi",checked:false },
          { "id": 5, "name": "Fries",checked:false }
        ]}
    };  
    }

    MakeAlert(msg){
        Alert.alert(
          'Invalid',
           msg,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
    RegisterBtnPressed(){
       
        if (this.validateEmail(this.state.email)){
            if (this.state.password==this.state.confirmPassword){
                  console.log("Button Pressed");
                  console.log("Email : ",this.state.email);
                  console.log("Password : ",this.state.password);
                   try {
             AsyncStorage.setItem('email', this.state.email);
             AsyncStorage.setItem('password', this.state.password);
             AsyncStorage.setItem('name', this.state.name);
            this.props.navigation.navigate('Orders')
          } catch (error) {
            Console.log("Can't Save Data", error)
          }
          }else{
               this.MakeAlert("Enter The Same Password");
          }}else{
            this.MakeAlert("Invalid Email Pattern");
          }
    }
    validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
        console.log("Email is Not Correct");
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text})
          console.log("Email is Correct");
          return true
        }
        }
    
      render(){
        

        return(
          <View style={styles.container}>  
          <Image source={require('../betahubsLogo.png')} style={{width: 300, height: 120,top:-50}}/>
        <TextInput
        placeholder="Enter your Name"
        keyboardType={'default'}
        clearButtonMode={'while-editing'}
            style={{height: 40,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.text}
          />
          <Text></Text>
        <TextInput
        placeholder="Enter your Email"
        keyboardType={'email-address'}
        clearButtonMode={'while-editing'}
            style={{height: 40,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) => this.validateEmail(text)}
            value={this.state.text}
          />
          <Text></Text>
            <TextInput
        placeholder="Enter your Password"
            secureTextEntry={true}
            clearButtonMode={'while-editing'}
            style={{height: 50,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.text}
          />
          <Text></Text>
        <TextInput
        placeholder="Enter your Password"
            secureTextEntry={true}
            clearButtonMode={'while-editing'}
            style={{height: 50,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) => this.setState({confirmPassword: text})}
            value={this.state.text}
          />
          <Text></Text>
             <Text>{"\n"} Email State : {this.state.email} {"\n"}</Text>
             <Text> Password State : {this.state.password}</Text> 
             <TouchableHighlight
    style={styles.submit}
    onPress={this.RegisterBtnPressed.bind(this)}
    underlayColor='#fff'>
      <Text style={[styles.submitText]}>Register</Text>
  </TouchableHighlight>
        </View>
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
        submit:{
            paddingTop:5,
            paddingBottom:5,
            paddingLeft:20,
            paddingRight:20,
            backgroundColor:'green',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
        },
        submitText:{
            color:'white',
            textAlign:'center', 
            fontSize:20
        }
      });