import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,Alert,AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = { isShowingText:true,checked:false,savedPassword:"",savedEmail:"",email:"",password:""};
      
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
      email="ofathi@betahubs.net"
      password="123456"
       if (this.validateEmail(this.state.email)){
        if (this.state.email==email && this.state.password==password){       
                this.props.navigation.navigate('Orders')
     }else{
           this.MakeAlert("Invalid Email or Password");
      }
    }else{
        this.MakeAlert("Invalid Email Pattern");
      }
  }

    RegisterBtnPressed(){
      this.props.navigation.navigate('Register')
    }

    validateEmail = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false)
      {
      this.setState({email:text})
      return false;
        }
      else {
        this.setState({email:text})
        return true
      }
      }

      render(){
        const logo='../betahubsLogo.png'
        return(
          <View style={styles.container}>
          <Text style={{top:-60}}>Email:ofathi@betahubs.net</Text>
          <Text style={{top:-55}}>Password:123456 </Text>
            <Image source={require(logo)} style={{width: 300, height: 120,top:-50}}/>
        
        <TextInput
        placeholder="Enter your Email"
        keyboardType={'email-address'}
        autoCapitalize={'none'}
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