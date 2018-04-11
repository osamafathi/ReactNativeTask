import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,CheckBox } from 'react-native';
//import { CheckBox } from 'react-native-elements'
import Login from './LoginPage'
import RootNavigator from './RootNavigator'

export default class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state = { checked:true,name:"",email:"",confirmPassword:"",password:"",jsonData : {
          "services": [
            { "id": 1, "name": "Meat",checked:false },
            { "id": 2, "name": "Chicken",checked:false },
            { "id": 3, "name": "Bread",checked:false },
            { "id": 4, "name": "Pepsi",checked:false },
            { "id": 5, "name": "Fries",checked:false }
          ]},
          checkArray:[true,true,true,true,true],
          nameArray:[]
        };  
      }
    MakeOrder(){
        console.log("Email : ",this.state.email);
        console.log("checkBox : ",this.state.checked);
        console.log("Make Order")
    }

    render() {
        var data = this.state.jsonData.services.map(function(item) {
            return {
              key: item.id,
              label: item.name,
              checkboxx:item.checked
            };
          });
          var orderName = [];
          console.log(data);
          for (let i=0;i<data.length;i++){
          orderName.push(data[i].checkboxx);
          }
          console.log("The Order Name : ",orderName);
        return (
        
           <View style={styles.container}>
               <Text style={styles.headerText}>
                Make Your Order
               </Text>

                     {/* <CheckBox
              title="Hii"
               checked={this.state.checked}
               style={styles.checkBoxText}
                onPress={() => this.setState({checked: !this.state.checked,email:"ssssss"})}/>  */}
        <View>    
           {this.state.checkArray.map(r => <CheckBox
              title="ssss"
               checked={r}
               style={styles.checkBoxText}
                onPress={() => this.setState({r: !r})}/> )}    
        </View> 

               <TouchableHighlight
    style={styles.submit}
    onPress={this.MakeOrder.bind(this)}
    underlayColor='#fff'>
      <Text style={[styles.submitText]}>Make an Order</Text>
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
    headerText:{
        color:'green',
      textAlign:'center', 
      fontSize:30
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