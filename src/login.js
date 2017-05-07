import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Button, TouchableNativeFeedback, Alert, TextInput, Navigator, BackAndroid } from 'react-native';
import * as firebase from 'firebase';
import home from './home'
import {StackNavigator} from 'react-navigation'
class login extends Component{
    static navigationOptions = {
        title: 'Login'
    }    
    constructor(props){
        super(props);
        this.state = {nim: ''} 
    }
    get nimRef(){
        return this.nimRef;
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1}}>
                <StatusBar
                backgroundColor={'#22313F'}
                barStyle="light-content"
                />                
                <View style={{height: 56, backgroundColor: '#22313F', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color:'white',fontSize:20}}>Vote App</Text>
                </View>
                <View style={{flex: 1, alignItems:'center',backgroundColor: '#22313F'}}>
                    <Text style={{marginTop:20, marginBottom:20, color: 'white', fontWeight: 'bold', fontSize: 20}}>Masukkan NIM Anda!</Text>
                    <TextInput
                        placeholder='Masukkan NIM disini'
                        placeholderTextColor='white'
                        underlineColorAndroid='white'
                        style={{width:300,height: 40, margin: 20, color: 'white'}}
                        onChangeText={(nim)=>this.setState({nim})}
                        value={this.state.nim}
                    />
                    <TouchableNativeFeedback onPress={()=>{
                        navigate('Home',{NIM: this.state.nim})
                        Alert.alert('Pemberitahuan', text='Use your voice wisely')}}>
                        <View style={{justifyContent:'center', alignItems:'center', backgroundColor: '#1abc9c', width:100,height:50}}>
                            <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>VOTE</Text>
                        </View>
                    </TouchableNativeFeedback>                    
                </View>
            </View>
        )
    }
}
export default login;