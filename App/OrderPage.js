import React, {Component}from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,FlatList,Alert } from 'react-native';
import { CheckBox,Avatar } from 'react-native-elements'
import Login from './LoginPage'
import RootNavigator from './RootNavigator'

export default class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state = { checked:true,name:"",email:"",confirmPassword:"",password:"",jsonData : 
          [
            { "id": 1, "name": "Meat",status:"Add to Cart",checked:false,logo:require('../meat.png')},
            { "id": 2, "name": "Chicken",status:"Add to Cart",checked:false,logo:require('../chicken.png')},
            { "id": 3, "name": "Bread",status:"Add to Cart",checked:false,logo:require('../bread.png')},
            { "id": 4, "name": "Pepsi",status:"Add to Cart",checked:false,logo:require('../pepsi.jpeg')},
            { "id": 5, "name": "Fries",status:"Add to Cart",checked:false,logo:require('../fries.png')},
            { "id": 6, "name": "Fish",status:"Add to Cart",checked:false,logo:require('../fish.png')}
          ],
          nameArray:[]
        };  
      }

    MakeOrder(){
      var orderName = Object.assign([], this.state.jsonData)
      var order2 = [{}]
      for (let i=0;i<orderName.length;i++){
        if(orderName[i].checked==true){
          order2.push(orderName[i]);
          } 
      }
      console.log("JSON ARRAY : ",order2);
    }


    CheckBoxSelect = (index, e) => {
      const user = Object.assign({}, this.state.jsonData[index]);
      const users = Object.assign([], this.state.jsonData);
      users[index] = user;
      users[index].checked=!users[index].checked
      if(users[index].checked){
        users[index].status="Added"
      }else{
        users[index].status="Add to Cart"
      }
      this.setState({jsonData:users});
    }
    
    render() {
        return (
           <View style={styles.container}>
               <Text style={{textAlign: 'center',fontSize:30,fontWeight:'bold',color:'green',margin:5}}>
                Make Your Order
               </Text>
                <FlatList
          data={this.state.jsonData}
          renderItem={({item,index}) => <View  style={{borderBottomColor: 'gray',borderBottomWidth: 0.25,margin:10}}>
          
          <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Avatar
              medium
             source={item.logo}
             onPress={() => console.log("Works!")}
            activeOpacity={0.7}
           />
           <Text style={{fontSize:20,fontWeight:'bold',color:'green', margin:5}}>{item.name}</Text>
           </View>
          <CheckBox 
          title={item.status}  
           checked={item.checked}
           containerStyle={styles.checkBoxText}
           iconRight={true}
            onPress={this.CheckBoxSelect.bind(this,index)}/>
        </View>
        </View>
        }
        />

                     {/* <CheckBox
              title="Hii"
               checked={true}
               style={styles.checkBoxText}
                onPress={() => this.setState({checked: false})}/>  */}
     
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
     // alignItems: 'center',
    //  justifyContent: 'center',
    },
    headerText:{
        color:'green',
      textAlign:'center', 
      fontSize:30
    },
    submit:{
      margin:15,
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
  },
  checkBoxText:{
    backgroundColor:'white',
    justifyContent:"space-between"
  }
  });