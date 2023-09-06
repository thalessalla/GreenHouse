import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import database from 'firebase/compat/database';
import Slider from '@react-native-community/slider';
import 'react-native-gesture-handler';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import { estilos } from '../css/style';




import Divider from '../my_assets/divider.svg'
import Light from '../my_assets/light.svg'
import Temp from '../my_assets/temp.svg'
import Humidity from '../my_assets/humidity.svg'


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




class App extends Component {

  state ={
    sensorTemp: [],
    sliderTemp: [],
    humidadeSolo: [],
    tempoLuz: [],
    dom: [] ,
    seg: [],
    ter: [],
    qua: [],
    qui: [],
    sex: [],
    sab: [],
  }
  
constructor(props){
  super(props)
  this.state ={
    tempMin: 20,
    tempMax: 40,
    umidadeMin: 0,
    umidadeMax: 100,
    luzMin: 0,
    luzMax: 12,
    countTempSupl: 0,
    countVezesSupl: 0,
  }
}




seg = async () => {
  const led = firebase.database().ref('diasSuplementacao');
    const newSegValue = this.state.seg === 0 ? 1 : 0;   
    await led.child('seg').set(newSegValue);
    this.setState({ seg: newSegValue });
}

ter = async () => {
  const led = firebase.database().ref('diasSuplementacao');
    const newSegValue = this.state.ter === 0 ? 2 : 0;   
    await led.child('ter').set(newSegValue);
    this.setState({ ter: newSegValue });
}

qua = async () => {
  const led = firebase.database().ref('diasSuplementacao');
  const newSegValue = this.state.qua === 0 ? 3 : 0;   
  await led.child('qua').set(newSegValue);
  this.setState({ qua: newSegValue });
}

qui = async () => {
  const led = firebase.database().ref('diasSuplementacao');
  const newSegValue = this.state.qui === 0 ? 4 : 0;   
  await led.child('qui').set(newSegValue);
  this.setState({ qui: newSegValue });
}

sex = async () => {
  const led = firebase.database().ref('diasSuplementacao');
  const newSegValue = this.state.sex === 0 ? 5 : 0;   
  await led.child('sex').set(newSegValue);
  this.setState({ sex: newSegValue });
}

sab = async () => {
  const led = firebase.database().ref('diasSuplementacao');
  const newSegValue = this.state.sab === 0 ? 6 : 0;   
  await led.child('sab').set(newSegValue);
  this.setState({ sab: newSegValue });
}

domingo = async () => {
  const led = firebase.database().ref('diasSuplementacao');
  const newSegValue = this.state.dom === 1 ? 0 : 1;   
  await led.child('dom').set(newSegValue);
  this.setState({ dom: newSegValue });
}





  componentDidMount () {
  firebase
  .database()
  .ref('configuracoes/')
  .child('confgAgua')
  .on('value', (snapshot) => {
    const inicioSlider = (snapshot.val());
    this.setState({inicioSlider})
  });
  firebase
  .database()
  .ref('configuracoes/')
  .child('confgLuz')
  .on('value', (snapshot) => {
    const sliderLuz = (snapshot.val());
    this.setState({sliderLuz})
  });
  firebase
  .database()
  .ref('configuracoes/')
  .child('confgTemp')
  .on('value', (snapshot) => {
    const sliderTemp = (snapshot.val());
    this.setState({sliderTemp})
  });
  firebase
  .database()
  .ref('leituras/')
  .child('temperatura')
  .on('value', (snapshot) => {
    const sensorTemp = (snapshot.val());
    this.setState({sensorTemp})
  });
  firebase
  .database()
  .ref('leituras/')
  .child('solo')
  .on('value', (snapshot) => {
    const humidadeSolo = (snapshot.val());
    this.setState({humidadeSolo})
  });
  firebase
  .database()
  .ref('leituras/')
  .child('luminosidade')
  .on('value', (snapshot) => {
    const iluminacao = (snapshot.val());
    this.setState({iluminacao})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('tempo')
  .on('value', (snapshot) => {
    const countTempSupl = (snapshot.val());
    this.setState({countTempSupl})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('seg')
  .on('value', (snapshot) => {
    const seg = (snapshot.val());
    this.setState({seg})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('ter')
  .on('value', (snapshot) => {
    const ter = (snapshot.val());
    this.setState({ter})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('qua')
  .on('value', (snapshot) => {
    const qua = (snapshot.val());
    this.setState({qua})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('qui')
  .on('value', (snapshot) => {
    const qui = (snapshot.val());
    this.setState({qui})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('sex')
  .on('value', (snapshot) => {
    const sex = (snapshot.val());
    this.setState({sex})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('sab')
  .on('value', (snapshot) => {
    const sab = (snapshot.val());
    this.setState({sab})
  });
  firebase
  .database()
  .ref('diasSuplementacao/')
  .child('dom')
  .on('value', (snapshot) => {
    const dom = (snapshot.val());
    this.setState({dom})
  });
  }

  

  valorAgua =(v) => {
    console.log(10)
  }
 


setarHumidade = (valor) =>{
  var temp = firebase.database().ref('configuracoes/')
  temp.child('confgAgua').set(parseInt(valor));
}

setarTemp = (valorTemp) =>{
  var temp = firebase.database().ref('configuracoes/')
  temp.child('confgTemp').set(parseInt(valorTemp));
}

setarLuz = (valor) =>{
  var temp = firebase.database().ref('configuracoes/')
  temp.child('confgLuz').set(parseInt(valor));
}


//contador tempo de suplementação

incrementTempSupl = () => {
  var luz = firebase.database().ref('diasSuplementacao');
  this.setState(prevState => ({ countTempSupl: prevState.countTempSupl+ 1 }));
  console.log(this.state.countTempSupl);
  luz.child('tempo').set(this.state.countTempSupl + 1);
};

decrementTempSupl = () => {
  var luz = firebase.database().ref('diasSuplementacao');
  if (this.state.countTempSupl > 0){
  this.setState(prevState => ({ countTempSupl: prevState.countTempSupl - 1 }));
  console.log(this.state.countTempSupl);
  luz.child('tempo').set(this.state.countTempSupl - 1);
  }
};



//contador vezes de suplementação

incrementVezesSupl = () => {
  this.setState(prevState => ({ countVezesSupl: prevState.countVezesSupl + 1 }));
  console.log(this.state.countVezesSupl)
};

decrementVezesSupl = () => {
  if (this.state.countVezesSupl > 0){
  this.setState(prevState => ({ countVezesSupl: prevState.countVezesSupl - 1 }));
  }
};



 render() {

    return (

      <ScrollView>
      <View style={estilos.corpo}>

        <View style={estilos.containerLeitura}>

          <View style={estilos.leituras}>
          <Humidity width={31} height={31} />
          <Text style={estilos.textoLeituras}>{this.state.humidadeSolo}%</Text>  
          <Text style={[estilos.legLeituras, estilos.cinza]}>Umidade do solo</Text>
          </View >

          <View style={[estilos.leituras, estilos.gap]}>
          <Temp width={31} height={31} />
          <Text style={estilos.textoLeituras}>{this.state.sensorTemp} ºC</Text>  
          <Text style={[estilos.legLeituras, estilos.cinza]}>Temperatura</Text>
          </View>

          <View style={estilos.leituras}>
          <Light width={31} height={31} />
          <Text style={estilos.textoLeituras}>{this.state.iluminacao}%</Text>  
          <Text style={[estilos.legLeituras, estilos.cinza]}>Iluminação</Text>
          </View>

        </View>

        <Divider width={"90%"} height={4} style={{marginTop: 20}}/>
                  

         <View style={estilos.setValores}>
          <Text style={estilos.cinza}>Umidade do solo desejada</Text>
         <Slider
           style={{width: 250, height: 40}}
           minimumValue={this.state.umidadeMin}
           maximumValue={this.state.umidadeMax}
           value={this.state.inicioSlider}
           onValueChange={valor => this.setState({inicioSlider:valor})}
           onSlidingComplete={valor => this.setarHumidade(valor)}
           thumbTintColor='#358A20'
           minimumTrackTintColor="#1B550C"
           maximumTrackTintColor="D9D9D9"
          />
          
           <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250  }}>
           <Text style={estilos.cinza}>{this.state.umidadeMin}%</Text>
            <Text style={estilos.cinzaE}>{parseInt(this.state.inicioSlider)}%</Text>
            <Text style={estilos.cinza}>{this.state.umidadeMax}%</Text>
           </View>
        </View>
        


        <View style={estilos.setValores}>
          <Text style={estilos.cinza}>Temperatura máxima desejada</Text>
         <Slider
           style={{width: 250, height: 40}}
           minimumValue={this.state.tempMin}
           maximumValue={this.state.tempMax}
           value={this.state.sliderTemp}
           onValueChange={valorTemp => this.setState({sliderTemp:valorTemp})}
           onSlidingComplete={valorTemp => this.setarTemp(valorTemp)}
           thumbTintColor='#358A20'
           minimumTrackTintColor="#1B550C"
           maximumTrackTintColor="#D9D9D9"
          />
          
           <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250  }}>
           <Text style={estilos.cinza}>{this.state.tempMin}ºC</Text>
            <Text style={estilos.cinzaE}>{parseInt(this.state.sliderTemp)}ºC</Text>
            <Text style={estilos.cinza}>{this.state.tempMax}ºC</Text>
           </View>
        </View>

        

        <View style={estilos.setValores}>
          <Text style={estilos.cinza}>Tempo de suplementação de luz</Text>
         <Slider
           style={{width: 250, height: 40}}
           minimumValue={this.state.luzMin}
           maximumValue={this.state.luzMax}
           value={this.state.sliderLuz}
           onValueChange={valor => this.setState({sliderLuz:valor})}
           onSlidingComplete={valor => this.setarLuz(valor)}
           thumbTintColor='#358A20'
           minimumTrackTintColor="#1B550C"
           maximumTrackTintColor="D9D9D9"
          />
          
           <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250  }}>
           <Text style={estilos.cinza}>{this.state.luzMin}/h</Text>
            <Text style={estilos.cinzaE}>{parseInt(this.state.sliderLuz)}/h</Text>
            <Text style={estilos.cinza}>{this.state.luzMax}/h</Text>
           </View>
        </View>

        {/* <Divider width={"90%"} height={4} style={{marginTop: 20}}/>

      
        <View style={estilos.containerSupl}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#414141'}}>CONTROLE DE SUPLEMENTAÇÃO</Text>


          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={estilos.setSupl}>
          <Text style={[estilos.legLeituras, estilos.cinza]}>Tempo de suplementação</Text>
          <Text style={estilos.textoLeituras}>{this.state.countTempSupl} mim</Text>

          <View style={{flexDirection: 'row', }}>
        <TouchableOpacity style={estilos.contador} onPress={this.decrementTempSupl}>
          <Text style={estilos.textoLeituras}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.contador} onPress={this.incrementTempSupl}>
          <Text style={estilos.textoLeituras}>+</Text>
        </TouchableOpacity>
        </View>
         
         </View>


         <View style={estilos.setSupl}>
          <Text style={[estilos.legLeituras, estilos.cinza]}>Vezes na semana</Text>
          <Text style={estilos.textoLeituras}>{this.state.countVezesSupl} x</Text>

          <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={estilos.contador} onPress={this.decrementVezesSupl}>
          <Text style={estilos.textoLeituras}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.contador} onPress={this.incrementVezesSupl}>
          <Text style={estilos.textoLeituras}>+</Text>
        </TouchableOpacity>
        </View>
         
         </View>

         
         </View>
         
        </View> */}



      <Divider width={"90%"} height={4} style={{marginTop: 20}}/>


      <View style={estilos.backgroundSupli}>

      <Text style={{fontSize: 18, fontWeight: '600', color: '#fff', textAlign: 'center'}}>Controle de suplementação</Text>

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>

          <View style={estilos.containerCalendario}>

            <Text style={[estilos.legLeituras, estilos.cinza]}>Dias da semana</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1}}>

        <TouchableOpacity style={[estilos.buttonData, this.state.dom === 0 ? estilos.dataActive : estilos.defaultData]} onPress={this.domingo}>
          <Text>Dom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.seg === 1 ? estilos.dataActive : estilos.defaultData]} onPress={this.seg}>
          <Text >Seg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.ter === 2 ? estilos.dataActive : estilos.defaultData]} onPress={this.ter}>
          <Text >Ter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.qua === 3 ? estilos.dataActive : estilos.defaultData]} onPress={this.qua}>
          <Text>Qua</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.qui === 4 ? estilos.dataActive : estilos.defaultData]} onPress={this.qui}>
          <Text >Qui</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.sex === 5 ? estilos.dataActive : estilos.defaultData]} onPress={this.sex}>
          <Text >Sex</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.buttonData, this.state.sab === 6 ? estilos.dataActive : estilos.defaultData]} onPress={this.sab}>
          <Text s>Sab</Text>
        </TouchableOpacity>

            </View>

          </View>

        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1,}}>

        <View style={estilos.setSupl}>
          <Text style={[estilos.legLeituras, estilos.cinza]}>Tempo de suplementação</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', flex:1, alignItems: 'center', gap: 40}}>
          
          <TouchableOpacity style={estilos.contador} onPress={this.decrementTempSupl}>
          <Text style={{color:'#fff', fontSize: 24}}>-</Text>
        </TouchableOpacity>

        <Text style={estilos.textoLeituras}>{this.state.countTempSupl} mim</Text>

          <TouchableOpacity style={estilos.contador} onPress={this.incrementTempSupl}>
          <Text style={{color:'#fff', fontSize: 24}}>+</Text>
        </TouchableOpacity>

          
        </View>
      </View>

      </View>

      </View>

        </View>

        
     
        </ScrollView>
    );
  }

}


export default App;