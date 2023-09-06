import React, { Component, useState, useEffect } from 'react';
import { FlatList, Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNRestart from 'react-native-restart';
import Restart from 'react-native-restart';
import { Expo } from 'expo';



import Divider from '../my_assets/divider.svg'

import { estilos } from '../css/style';


//////

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';




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




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}




const Agua = () => {
  

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);



  const [historicos, setHistoricos] = useState([]);
  const [aguaTotal, setAguaTotal] = useState([]);
  const [aguaSemanal, setAguaSemanal] = useState([]);




  useEffect(() => {
    const db = firebase.database();
    db.ref('historicosAgua').once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const historicosArray = Object.values(data); 
        setHistoricos(historicosArray);
      })
      .catch(error => {
        console.error('Erro ao recuperar dados:', error);
      });

    db.ref('agua/')
      .child('consumo_total')
      .on('value', (snapshot) => {
        const consumo_total = snapshot.val();
        setAguaTotal(consumo_total);
      });

    db.ref('agua/')
      .child('consumo_semanal')
      .on('value', (snapshot) => {
        const consumo_semanal = snapshot.val();
        setAguaSemanal(consumo_semanal);
      });
      }, []);
      




  return (
    <ScrollView
        
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>



    <View style={estilos.body}>
      <View>
      
    <View style={estilos.containerTotal}>
    <Text style={[estilos.textoLeituras, estilos.textoClaro]}>Consumo total</Text>
    <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8,}}>
    <Ionicons name="water-outline" size={30} color='white' />
    <Text style={estilos.fontLeitura}>{parseInt(aguaTotal)}</Text>
    <Text style={[estilos.legLeituras, estilos.cinza]}>L</Text>

    </View>

    </View> 

    <Divider width={"100%"} height={4} style={{marginTop: 20, marginBottom: 20}}/>

    <Text style={estilos.textoLeituras}>Consumo da semana atual</Text>

    <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8}}>
    <Ionicons name="water-outline" size={30} color='#4DAA37' />
    <Text style={estilos.fontLeitura}>{parseInt(aguaSemanal)}</Text>
    <Text style={[estilos.legLeituras, estilos.cinza]}>L</Text>
    </View>

    <Divider width={"100%"} height={4} style={{marginTop: 20, marginBottom: 20}}/>



    <Text style={estilos.textoLeituras}>Historico por semanas</Text>
    <Text style={[estilos.legLeituras, estilos.cinza]}>Datas em ordem crescente</Text>




    <View style={{marginTop: 20}}>
      <FlatList
        data={historicos}
        renderItem={({ item }) => 
        <View style={estilos.containerHistoricos}>
        <Text >{parseInt(item)} L</Text>
        </View>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

<Button title="Refresh" onPress={handleRefresh} />

    
    </View>
    </View>

    </ScrollView>
  );
};

export default Agua;