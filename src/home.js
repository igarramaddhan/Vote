import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Button, TouchableNativeFeedback, Alert, BackAndroid } from 'react-native';
import login from './login'
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation'
const firebaseConfig = {
    apiKey: "AIzaSyCFSP17zdhKpMKjCTCN5BGc5TAlh0_8T0s",
    authDomain: "vote-6b664.firebaseapp.com",
    databaseURL: "https://vote-6b664.firebaseio.com",
    projectId: "vote-6b664",
    storageBucket: "vote-6b664.appspot.com",
    messagingSenderId: "16760119062"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const log = new login();
class home extends Component{
    static navigationOptions = {
        title: 'Home'
    }
    constructor(props){
        super(props);       
        this.database = firebase.database();
        this.calon1Ref = this.database.ref('calon1');
        this.calon2Ref = this.database.ref('calon2');
        this.nimRef = this.database.ref('Mahasiswa');     
    }
    render(){
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return(
            <View style={{flex:1}}>
                <StatusBar
                backgroundColor={'#22313F'}
                barStyle="light-content"
                />                
                <View style={{height: 56, backgroundColor: '#22313F', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color:'white',fontSize:20}}>Vote App</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignContent:'center'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{fontSize:25, textAlign:'center',fontWeight:'bold'}}>Calon Ketua Angkatan 1</Text>
                        <Image source={require('./img/facebook.png')} style={{width: 150, height: 150}}/>
                        <Text style={{margin: 10}}>Some text goes here until drop</Text>
                        <TouchableNativeFeedback onPress={()=>{
                            this.calon1Ref.once('value', (snapshot)=>{
                                this.calon1Ref.set(snapshot.val()+1);
                            }),
                            this.nimRef.push({'nim':params.NIM, 'pilihan': 'calon1'})
                            Alert.alert('Pemberitahuan', text='Thanks for voting')                                
                        }}>
                            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: '#1abc9c', width:100,height:50}}>
                                <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>VOTE</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{fontSize:25, textAlign:'center',fontWeight:'bold'}}>Calon Ketua Angkatan 2</Text>
                        <Image source={require('./img/mail.png')} style={{width: 150, height: 150}}/>
                        <Text style={{margin: 10}}>Some text goes here until drop</Text>
                        <TouchableNativeFeedback onPress={()=>{
                            this.calon2Ref.once('value', (snapshot)=>{
                                this.calon2Ref.set(snapshot.val()+1);
                            }),
                            this.nimRef.push({'nim':params.NIM, 'pilihan': 'calon2'})
                            Alert.alert('Pemberitahuan', text='Thanks for voting')
                        }}>
                            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: '#1abc9c', width:100,height:50}}>
                                <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>VOTE</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        )
    }
    
}
export default home;