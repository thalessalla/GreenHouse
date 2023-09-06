import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
//import database from 'firebase/compat/database';
//import Slider from '@react-native-community/slider';
import 'react-native-gesture-handler';
//import LinearGradient from 'react-native-linear-gradient';
//import { LinearGradient } from "expo-linear-gradient";
import { estilos } from '../css/style';



import Luz from '../my_assets/Luz.svg'
import Agua from '../my_assets/Agua.svg'
import Supply from '../my_assets/Supply.svg'
import Ventilacao from '../my_assets/Ventilacao.svg'
import ImagemControles from '../my_assets/illustration-nature-research.svg'


const firebaseConfig = {
  apiKey: "AIzaSyD_PwO4_-i_UUyHm1m_Fl9sMQc5cyLIaBw",
  authDomain: "greenhousecontrol-f5e05.firebaseapp.com",
  databaseURL: "https://greenhousecontrol-f5e05-default-rtdb.firebaseio.com",
  projectId: "greenhousecontrol-f5e05",
  storageBucket: "greenhousecontrol-f5e05.appspot.com",
  messagingSenderId: "883848386474",
  appId: "1:883848386474:web:e5b7a218be553328d5bdd3",
  measurementId: "G-SL8YVX88DN"
};

class Controles extends Component {


  state ={
    statusLuzCount: [],
    statusAguaCount: [],
    statusAguaVent: [],
    statusAguaSupl: [],
  }


  componentDidMount () {
    firebase
    .database()
    .ref('controles/')
    .child('statusLuz')
    .on('value', (snapshot) => {
     const statusLuzCount = (snapshot.val());
     this.setState({statusLuzCount});
  });
  firebase
  .database()
  .ref('controles/')
  .child('statusAgua')
  .on('value', (snapshot) => {
   const statusAguaCount = (snapshot.val());
   this.setState({statusAguaCount});
});
firebase
.database()
.ref('controles/')
.child('statusVent')
.on('value', (snapshot) => {
 const statusAguaVent = (snapshot.val());
 this.setState({statusAguaVent});
});
firebase
.database()
.ref('controles/')
.child('statusSupl')
.on('value', (snapshot) => {
 const statusAguaSupl = (snapshot.val());
 this.setState({statusAguaSupl});
});
}



ligarDesligarLed = async () => {
  var led = firebase.database().ref('controles');
  
  if (this.state.statusLuzCount === 0) {
    led.child('statusLuz').set(1);
    await new Promise(resolve => setTimeout(resolve, 10000)); 
    led.child('statusLuz').set(0); 
  } else if (this.state.statusLuzCount === 1) {
    led.child('statusLuz').set(0);
  }
}
  
  ligarDesligarAgua = async () =>{
    var led = firebase.database().ref('controles');
    if(this.state.statusAguaCount == 0){
      led.child('statusAgua').set(1);
      await new Promise(resolve => setTimeout(resolve, 10000)); 
      led.child('statusAgua').set(0);
    }else if (this.state.statusAguaCount == 1){
      led.child('statusAgua').set(0);
    }
  }
  ligarDesligarVent = async () =>{
    var led = firebase.database().ref('controles');
    if(this.state.statusAguaVent == 0){
      led.child('statusVent').set(1);
      await new Promise(resolve => setTimeout(resolve, 10000));
      led.child('statusVent').set(0);
    }else if (this.state.statusAguaVent == 1){
      led.child('statusVent').set(0);
    }
  }
  ligarDesligarSupl = async() =>{
    var led = firebase.database().ref('controles');
    if(this.state.statusAguaSupl == 0){
      led.child('statusSupl').set(1);
      await new Promise(resolve => setTimeout(resolve, 10000));
      led.child('statusSupl').set(0);
    }else if (this.state.statusAguaSupl == 1){
      led.child('statusSupl').set(0);
    }
  }


  render() {
      return (

        <ScrollView>
    
<View style={estilos.body}>

<View style={{alignItems: 'center', marginBottom: 20, marginTop: 20}}>
<ImagemControles width={176} height={150} />  
</View>


<Text style={estilos.textoLeituras}>CONTROLES MANUAIS</Text>
<Text>Os controles manuais ficam ativos por segurança por apenas 10 seg</Text>


  <View style={{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>

     <TouchableOpacity 
       style={[estilos.button, this.state.statusLuzCount === 1 ? estilos.greenButton : estilos.defaultButton]}
       onPress={this.ligarDesligarLed}>
        <Luz width={70} height={70} />
     <Text style={estilos.buttonText}>Iluminação</Text>
     </TouchableOpacity>

     <TouchableOpacity 
       style={[estilos.button, this.state.statusAguaCount === 1 ? estilos.greenButton : estilos.defaultButton]}
       onPress={this.ligarDesligarAgua} >    
       <Agua width={70} height={70} />       
      <Text style={estilos.buttonText}>Irrigação</Text>
     </TouchableOpacity>

   </View>


     <View style={{flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',}}>

     <TouchableOpacity 
    style={[estilos.button, this.state.statusAguaVent === 1 ? estilos.greenButton : estilos.defaultButton]}
    onPress={this.ligarDesligarVent}>
      <Ventilacao width={70} height={70} />          
      <Text style={estilos.buttonText}>Ventilação</Text>
     </TouchableOpacity>



     <TouchableOpacity 
    style={[estilos.button, this.state.statusAguaSupl === 1 ? estilos.greenButton : estilos.defaultButton]}
    onPress={this.ligarDesligarSupl} > 
    <Supply width={70} height={70} />          
      <Text style={estilos.buttonText}>Suplementação</Text>
     </TouchableOpacity>

     </View>

     </View>
     </ScrollView>
      )
  }

 }






export default Controles;
