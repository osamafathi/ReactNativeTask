import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,Alert,AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = { isShowingText:true,checked:false,email:"",password:""};
      
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

    LoginBtnPressed(){
     
       if (this.validateEmail(this.state.email)){
      //   if (this.state.email==email && this.state.password==password){
              // console.log("Button Pressed");
              // console.log("Email : ",this.state.email);
              // console.log("Password : ",this.state.password);
              try {
                let name2 =  AsyncStorage.getItem('name2');
                 let savedEmail =  AsyncStorage.getItem('email2').then((emailValue)=> {
                  this.state.email=emailValue; 
                 // console.log("Email : ",emailValue);
                });
                 let savedPassword = AsyncStorage.getItem('password2').then((passwordValue)=> {
                  this.state.password=passwordValue;
                 // console.log("password : ",passwordValue);
                });
                
                console.log("Button Pressed");
                console.log("email : ",email);
                console.log("password : ",password);

              } catch (error) {
                console.log("Cannot get Data",error);
              }
      // }else{
      //      this.MakeAlert("Invalid Email or Password");
    //  }
    }else{
        this.MakeAlert("Invalid Email Pattern");
      }
  }

    RegisterBtnPressed(){
      console.log("Button Pressed");
      this.props.navigation.navigate('Register')
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
          <Text style={{top:-60}}>Email:ofathi@betahubs.net</Text>
          <Text style={{top:-55}}>Password:123456 </Text>
            <Image source={require('../betahubsLogo.png')} style={{width: 300, height: 120,top:-50}}/>
        
        <TextInput
        placeholder="Enter your Email"
        keyboardType={'email-address'}
        clearButtonMode={'while-editing'}
            style={{height: 40,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) =>this.validateEmail(text)}
            value={this.state.text}
          />
        
        <TextInput
        placeholder="Enter your Password"
            secureTextEntry={true}
            clearButtonMode={'while-editing'}
            style={{height: 50,borderBottomColor:'green',borderBottomWidth:1,width:300,fontSize:20}}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.text}
          />
          <Text></Text>
          <TouchableHighlight
    style={styles.submit}
    onPress={this.LoginBtnPressed.bind(this)}
    underlayColor='#fff'>
      <Text style={[styles.submitText]}>Login</Text>
  </TouchableHighlight>
          <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text>Don't you have an Account ?</Text>
             <Button style={{borderWidth:5}} 
             onPress={this.RegisterBtnPressed.bind(this)}
      title="Register"
      color="green"
    /> </View>
     
           {/* <CheckBox
              title='Click Here'
               checked={this.state.checked}
               style={styles.checkBoxText}
                onPress={() => this.setState({checked: !this.state.checked})}/> 
                <Text style={styles.checkBoxText} >{displayName}</Text> */}
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