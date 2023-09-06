import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { estilos } from '../css/style';


const Error = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F5F6FA" }}>
      <Ionicons name="alert-circle-outline" size={90} color={'#DA4747'} />
        <Text style={[estilos.cinzaE, estilos.textoLeituras]}>Não há conexão com a internet</Text>
        <Text style={estilos.cinza}>Verifique a conexão do seu celular com a internet</Text>
      </View>
  );
};

export default Error;