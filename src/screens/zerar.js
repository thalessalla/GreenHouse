import React, { Component, useState, getElementById } from 'react';
import { Text, View, Button, Alert, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { estilos } from '../css/style';
import RNRestart from 'react-native-restart';



import Refresh from '../my_assets/Refresh.svg'


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



const Zerar = () => {

  state ={
    zerar: [],
  }
  zero = async () => {
    const zero = firebase.database().ref('historicos');       
    zero.child('zerar').set(1);
    await new Promise(resolve => setTimeout(resolve, 10000)); 
    zero.child('zerar').set(0);
  }


  ////  Zerar Firebase
zerarFirebase = () => {
  const excluirAgua = 'historicosAgua';
  const novaChaveAgua = 'historicosAgua';
  const novoNoAgua = 'consumo';

  const excluirEnergia = 'historicosEnergia';
  const novaChaveEnergia = 'historicosEnergia';
  const novoNoEnergia = 'consumo';



  const database = firebase.database();

  const chaveRef = database.ref(excluirAgua);
 
 // Passo 2: Use o método `remove()` para excluir a chave
 chaveRef
   .remove()
   .then(() => {
     console.log(`Chave "${excluirAgua}" excluída com sucesso.`);
 
     // Passo 3: Crie uma nova chave usando o método `set()` ou `update()`
     const novaChaveRef = database.ref(`${novaChaveAgua}/${novoNoAgua}`);
  novaChaveRef
    .set(0)
    .then(() => {
      console.log(`Novo nó "${novoNoAgua}" criado com valor 0 dentro da chave "${novaChaveAgua}".`);
    })
       .catch((error) => {
         console.error('Erro ao criar nova chave:', error);
       });
   })
   .catch((error) => {
     console.error('Erro ao excluir a chave:', error);
   });

/// Energia


  const chaveRefEnergia = database.ref(excluirEnergia);

 // Passo 2: Use o método `remove()` para excluir a chave
 chaveRefEnergia
   .remove()
   .then(() => {
     console.log(`Chave "${excluirEnergia}" excluída com sucesso.`);
 
     // Passo 3: Crie uma nova chave usando o método `set()` ou `update()`
     const novaChaveRef = database.ref(`${novaChaveEnergia}/${novoNoEnergia}`);
  novaChaveRef
    .set(0)
    .then(() => {
      console.log(`Novo nó "${novoNoEnergia}" criado com valor 0 dentro da chave "${novaChaveEnergia}".`);
    })
       .catch((error) => {
         console.error('Erro ao criar nova chave:', error);
       });
   })
   .catch((error) => {
     console.error('Erro ao excluir a chave:', error);
   });
 
   //RNRestart.Restart();

 }
 

 const twoOptionAlert = () => {
  Alert.alert(
    'Deseja realmente apagar todos os dados',
    'Você irá apagar permanentemente',
    [
      {
        text:'Sim',
        onPress: () => {
          zero()
          zerarFirebase()
         
        }
      },
      {
        text:"Não",
        onPress :()=>{

        }
      }
    ]
  )
 }




  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F5F6FA" }}>
      <Refresh width={250} height={250} /> 
      {/* <Ionicons name="alert-circle-outline" size={90} color={'#DA4747'} /> */}
        <Text style={[estilos.cinzaE, estilos.textoLeituras]}>Resetar os históricos de consumo</Text>
        <Text style={{textAlign: 'center', maxWidth: "90%", color:"#6E7178"}}>Ao resetar você irá apagar todos os dados de consumo de água e energia.</Text>
        <Button
         onPress={twoOptionAlert}
         title="Apagar"
         color="#4DAA37"
         accessibilityLabel="Botão para apagar históricos de consumo"
         />
      </View>
  );
};

export default Zerar;