import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView, Alert } from 'react-native';
import { Button,Item, Input, Label, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

export default class LoginScreen extends Component {

  constructor(props){
    super(props)
  }
    state={
        "email":"",
        "password":""
    }

    userLogin(email,password){
      firebase.auth().signInWithEmailAndPassword(email, password)
                  .then(()=>{
                    this.props.navigation.replace("HomeScreen")
                  })
                  .catch((err)=>{
                    Alert.alert(err.message)
                  })
    }


    render(){
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="position">
        <View style={{alignItems:"center",marginTop:10}}>
            <Image
            source={require('../assets/logo.jpg')}
            style={{width:280,height:200,borderRadius:10}}
            />
        </View>
            <Item 
            floatingLabel
            style={{borderBottomColor:'red'}}
            >
              <Label>Email ID</Label>
              <Input
              value={this.state.email}
              onChangeText ={text => this.setState({email:text})}
              />
            </Item>
            <Item 
            floatingLabel
            style={{borderBottomColor:'red'}}
            >
              <Label>Password</Label>
              <Input
              value={this.state.password}
              onChangeText ={text => this.setState({password:text})}
              />
            </Item>
            <Button 
            full rounded danger
             style={{margin:10,justifyContent:'center'}}
             onPress={()=>this.userLogin(this.state.email,this.state.password)}
             >
                <Text style={{color:'white',fontSize:22}}>Login</Text>
            </Button>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                <Text style={{color:'red',textAlign:"center"}}>Don't have an account ? Signup</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
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
