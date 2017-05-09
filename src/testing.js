import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import * as firebase from 'firebase';

class testing extends Component{
    constructor(props){
        super(props)
        this.state={
            nim: '',
            confNim:''
        }
        this.ref = firebase.database().ref('Mahasiswa');
    }
    gotData=(data)=>{
        console.log(data.val())
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex: 1, alignItems:'center',backgroundColor: '#22313F'}}>
                    <TextInput
                        placeholder='Masukkan NIM disini'
                        placeholderTextColor='white'
                        underlineColorAndroid='white'
                        style={{width:300,height: 40, margin: 20, color: 'white'}}
                        onChangeText={(nim)=>this.setState({nim})}
                        value={this.state.nim}
                    />
                    <TouchableNativeFeedback onPress={()=>this.ref.on('value', (data)=>{
                        console.log(Object.keys(data.val()))
                        for(var i = 0; i < Object.keys(data.val()).length; i++){
                            var k = Object.keys(data.val())[i];
                            var nim = data.val()[k].nim;
                            var pilihan = data.val()[k].pilihan;
                            if(this.state.nim==nim){
                                alert('Maaf NIM sudah memilih')
                            }
                            //console.log(nim, pilihan)
                        }
                        
                        })}>
                        <View style={{justifyContent:'center', alignItems:'center', backgroundColor: '#1abc9c', width:100,height:50}}>
                            <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}>VOTE</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <Text></Text>                      
                </View>
            </View>
        )
    }
}
export default testing