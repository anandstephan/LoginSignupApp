import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import * as firebase from 'firebase'
 

export default class LoadingScreen extends Component {

  constructor(props){
    super(props)
  }
    state={
        "email":"",
        "password":""
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          console.log("hello"+user)
          this.props.navigation.replace("HomeScreen")
        }else{
          this.props.navigation.replace("Login")
        }
      })
    }

    render(){
  return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#d9534f"/>
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
