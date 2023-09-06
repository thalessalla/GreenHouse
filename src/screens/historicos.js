import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


const db = firebase.database();

const Historicos = () => {



  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    db.ref('historicos').once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const historicosArray = Object.values(data); // Transforma os valores em um array
        setHistoricos(historicosArray);
      })
      .catch(error => {
        console.error('Erro ao recuperar dados:', error);
      });
 }, []);






  return (
    <View style={styles.container}>
      <FlatList
        data={historicos}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Historicos;