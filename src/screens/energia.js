import React, { Component, useState, useEffect } from 'react';
import { FlatList, Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import database from '@react-native-firebase/database';

import { estilos } from '../css/style';

import Corrente from '../my_assets/electric_bolt.svg'
import Potencia from '../my_assets/electric_meter.svg'
import Divider from '../my_assets/divider.svg'





import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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

const Energia = () => {
  const [consumoTotal, setConsumoTotal] = useState([]);
  const [consumoSemanal, setConsumoSemanal] = useState([]);
  const [corrente, setCorrente] = useState([]);
  const [historicos, setHistoricos] = useState([]);
  const [watts, setWatts] = useState([]);

  useEffect(() => {
    const db = firebase.database();

    // Recupere dados em tempo real do Firebase
    db.ref('energia/')
      .child('consumo_total')
      .on('value', (snapshot) => {
        const consumo_total = snapshot.val();
        setConsumoTotal(consumo_total);
      });
    db.ref('energia/')
      .child('consumo_semanal')
      .on('value', (snapshot) => {
        const consumo_semanal = snapshot.val();
        setConsumoSemanal(consumo_semanal);
      });
    db.ref('energia/')
      .child('corrente')
      .on('value', (snapshot) => {
        const corrente = snapshot.val();
        setCorrente(corrente);
      });
      db.ref('energia/')
      .child('watts')
      .on('value', (snapshot) => {
        const watts = snapshot.val();
        setWatts(watts);
      });
    // Recupere dados de histórico uma vez
    db.ref('historicosEnergia')
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        const historicosArray = Object.values(data);
        setHistoricos(historicosArray);
      })
      .catch((error) => {
        console.error('Erro ao recuperar dados:', error);
      });
  }, []);

  ///

  const [valor, setValor] = useState('');
  const [valorReaisTotal, setValorReaisTotal] = useState(0);
  const [valorReaisSemanal, setValorReaisSemanal] = useState(0);

  const handleInputChange = (text) => {
    setValor(text);
  };

  const handleSalvar = () => {
    // Faça a conversão para float e verifique se é um número válido
    const valorFloat = parseFloat(valor);
    const valorComPonto = valor.replace(',', '.');

    if (!isNaN(valorFloat)) {
      // Se for um número válido, faça algo com o valor float
      const novoValorReaisTotal = valorComPonto * consumoTotal;
      const novoValorReaisSemanal = valorComPonto * consumoSemanal;
      setValorReaisTotal(novoValorReaisTotal);
      setValorReaisSemanal(novoValorReaisSemanal);
    } else {
      // Se não for um número válido, mostre uma mensagem de erro
      Alert.alert('Erro:', 'Insira um valor numérico válido.');
    }
  }
  //const valorReaisTotal = valor * consumoTotal;
 

  // render() {

  return (
    <ScrollView>

<View style={estilos.body}>

<View style={{alignItems: 'center', marginBottom: 20, marginTop: 20}}>

      
    <Text style={estilos.textoLeituras}>Em tempo real</Text>


    <View style={{  flex: 1,
    flexDirection: 'row', // Define a direção dos elementos filhos para horizontal
    alignContent: 'space-around',
    gap: 20,
    
  }}>


    <View style={estilos.energia}>
    <Corrente width={31} height={31} />

      <Text style={estilos.textoLeituras}>{corrente} A</Text>
      <Text style={[estilos.legLeituras, estilos.cinza]}>Corrente</Text>
    </View>


    <View style={estilos.energia}>
    <Potencia width={31} height={31} />

    <Text style={estilos.textoLeituras}>{watts} Watts</Text>
    <Text style={[estilos.legLeituras, estilos.cinza]}>Potência</Text>
    </View>
         </View>

         <Divider width={"100%"} height={4} style={{marginTop: 20}}/>




         <View style={estilos.containerTarifa}>
      <Text style={estilos.textoLeituras}>Digite o valor da tarifa eletrica</Text>
      <TextInput
        placeholder="Digite aqui"
        keyboardType="numeric"
        value={valor}
        onChangeText={handleInputChange}
        style={estilos.containerInput}
      />
      <Button title="Salvar" onPress={handleSalvar} color="#4DAA37"/>
    </View>

    <Divider width={"100%"} height={4}/>


         <View style={estilos.containerTotal}>
              <Text style={[estilos.textoLeituras, estilos.textoClaro]}>Consumo total</Text>
              <View style={estilos.leiturasEnergia}>
                <View style={{width: 100, borderRightWidth: 2, borderColor: '#F5F6FA',}}>
                <Text style={estilos.textoLeituras}>{consumoTotal}</Text>
                <Text style={[estilos.legLeituras, estilos.textoClaro]}>Kw/h</Text>
                </View>

                <View style={{width: 100}}>
                <Text style={estilos.textoLeituras}>{valorReaisTotal.toFixed(2)}</Text>
                <Text style={[estilos.legLeituras, estilos.textoClaro]}>R$</Text>
                </View>
              </View>
         </View>



         <View style={estilos.containerSemanal}>
              <Text style={estilos.textoLeituras}>Consumo da Semana</Text>
              <View style={estilos.leiturasEnergia}>
                <View style={{width: 100, borderRightWidth: 2, borderColor: '#4DAA37',}}>
                <Text style={estilos.textoLeituras}>{consumoSemanal}</Text>
                <Text style={[estilos.legLeituras, estilos.cinza]}>Kw/h</Text>
                </View>

                <View style={{width: 100}}>
                <Text style={estilos.textoLeituras}>{valorReaisSemanal.toFixed(2)}</Text>
                <Text style={[estilos.legLeituras, estilos.cinza]}>R$</Text>
                </View>
              </View>
         </View>

         <Divider width={"100%"} height={4} style={{marginTop: 20, marginBottom: 20}}/>

         <Text style={estilos.textoLeituras}>Histórico por semanas</Text>
         <Text style={[estilos.legLeituras, estilos.cinza]}>Datas em ordem crescente</Text>

</View>



         <View style={{}}>
      <FlatList
        data={historicos}
        renderItem={({ item }) => 
        <View style={estilos.containerHistoricos}>
        <Text >{item} Kw/h</Text>
        </View>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>




         
      </View> 
      </ScrollView>
 );
}

// }

export default Energia;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
// });