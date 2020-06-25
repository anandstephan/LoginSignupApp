import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import { Button,Item, Input, Label, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebaseConfig } from '../config';
import * as firebase from 'firebase'

export default class HomeScreen extends Component {

  constructor(props){
    super(props)
  }
    state={
        "email":""
    }
    componentDidMount(){
      this.unsubscribeAuth =     firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.setState({
            email:user.email
          })
        }else{
          this.props.navigation.replace("Login")
        }
      })
    }
    componentWillUnmount(){
      this.unsubscribeAuth()
    }
    userSignOut(){
      firebase.auth().signOut()
              .catch(err=>Alert.alert(err))
    }
    
    render(){
  return (
        <View style={styles.container}>
            <Text style={{textAlign:"center"}}>You are logged in as {this.state.email}</Text>
            <Button
            onPress={()=>this.userSignOut()} 
            full rounded danger
             style={{margin:10,justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:22}}>Logout</Text>
            </Button>
        </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding:10
  },
});
