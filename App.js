import React from 'react';
import { StatusBar } from 'expo-status-bar';
//import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './src/screens/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';
import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';
import { estilos } from './src/css/style';
import { Alert } from 'react-native';


//http://mirrors.ibiblio.org/CTAN/fonts/fontawesome5/doc/fontawesome5.pdf


import Home from './src/screens/home';
import Controles from './src/screens/controles';
import Error from './src/screens/error';
import Teste from './src/screens/teste';
import Energia from './src/screens/energia';
import Agua from './src/screens/agua';
import Historico from './src/screens/historicos';
import Zerar from './src/screens/zerar';


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

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }



const Drawer = createDrawerNavigator();

export default function App() {




//Verifica se o celular está conectado a internet


  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F5F6FA" }}>
      <Ionicons name="alert-circle-outline" size={90} color={'#DA4747'} />
        <Text style={[estilos.cinzaE, estilos.textoLeituras]}>Não há conexão com a internet</Text>
        <Text style={estilos.cinza}>Verifique a conexão do seu celular com a internet</Text>
      </View>
    );
  }




//Inicio do código

  return (
   
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
       drawerActiveBackgroundColor: '#358A20', 
       drawerActiveTintColor: '#fff',
       drawerLabelStyle: {marginLeft: -20},
      }}>
        <Drawer.Screen 
          name="Home"
          component={Home}
          options={{
          //title: 'Home',
            headerStyle: {
              backgroundColor: '#358A20',},
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            )
          }}
          />
        <Drawer.Screen name="Controles"
          component={Controles}
          options={{
            title: 'Controles manuais',
            headerStyle: {
              backgroundColor: '#358A20',
            },
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="grid-outline" size={22} color={color} />
            )
          }} />

{/* <Drawer.Screen name="Erro"
          component={Error}
          options={{
            title: 'Erro',
            headerStyle: {
              backgroundColor: '#358A20',
            },
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="grid-outline" size={22} color={color} />
            )
          }} /> */}
          <Drawer.Screen name="Eletricidade"
          component={Energia}
          options={{
            title: 'Eletricidade',
            headerStyle: {
              backgroundColor: '#358A20',
            },
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="flash-outline" size={22} color={color} />
            )
          }} />
           <Drawer.Screen name="Água"
          component={Agua}
          options={{
            title: 'Água',
            headerStyle: {
              backgroundColor: '#358A20',
            },
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="water-outline" size={22} color={color} />
            )
          }} />
           <Drawer.Screen name="Zerar"
          component={Zerar}
          options={{
            title: 'Zerar consumos',
            headerStyle: {
              backgroundColor: '#358A20',
            },
            headerTintColor: '#fff',
            drawerIcon: ({color}) => (
              <Ionicons name="refresh-outline" size={22} color={color} />
            )
          }} /> 
          
      
      </Drawer.Navigator>
      {/* <View style={[estilos.espStatus, espStatus ? estilos.conected : estilos.disconected ]}>
        <Text style={{color: '#fff'}}>A base está {espStatus ? 'conectada à Internet' : 'desconectada'}</Text>
      </View> */}
    </NavigationContainer>

  );
};

