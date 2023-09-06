import { StyleSheet } from 'react-native';


export const estilos = StyleSheet.create ({
  containerLeitura: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: "center",
    marginTop: 20,
    maxWidth: '90%',
  },
body:{
  paddingLeft:20, 
  paddingRight:20, 
  justifyContent: 'center', 
  flexGrow: 1,
  backgroundColor: '#F5F6FA',
  minHeight:"100%"
},
  corpo: {
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    flexGrow: 1,
    alignContent: 'space-between',
    justifyContent: "space-between",
  },
  cinza:{
    color: '#6E7178',
  },
  cinzaE:{
    color: '#414141',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
    gap: 10,
  },
  leituras: {
    width: 110,
    height: 114,
    backgroundColor: '#F3F4F9',
    borderRadius: 22,
    shadowColor: 'rgba(0, 0, 80, 0.15)',
    shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
    shadowOpacity: 1, // Opacidade da sombra para iOS
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    gap: {
      marginRight: 10,
      marginLeft: 10,
    },
  texto:{
    fontSize: 16,
  },
  textoLeituras: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: '#414141',
    textAlign: 'center',
  },
  legLeituras: {
    // maxWidth: '85%',
    textAlign: 'center',
  },
  setValores: {
    backgroundColor: '#F3F4F9',
    borderRadius: 22,
    shadowColor: 'rgba(0, 0, 80, 0.15)',
    shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
    shadowOpacity: 1, // Opacidade da sombra para iOS
    shadowRadius: 8,
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#fff'
  },




////////////Suplementação

backgroundSupli:{
  backgroundColor: '#4DAA37', width: "100%", borderTopRightRadius:28, borderTopLeftRadius: 28, paddingTop:40, marginTop: 20,
},
containerCalendario:{
  height: 100, width: '90%', backgroundColor: '#fff', borderRadius: 8, marginTop: 20, padding: 8,
},

containerSupl:{
  marginTop: 20,
 },
 setSupl: {
 marginTop: 20,
 marginBottom: 60,
 width: "90%",
 height: 100,
 backgroundColor: '#F3F4F9',
 borderRadius: 8,
 shadowColor: 'rgba(0, 0, 80, 0.15)',
 shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
 shadowOpacity: 1, // Opacidade da sombra para iOS
 shadowRadius: 8,
 borderWidth: 2,
 borderColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: 10,
   paddingBottom: 10,

 },
 contador: {
  width: 40,
  height: 34,
  backgroundColor: '#4DAA37',
 borderRadius: 8,
   shadowColor: 'rgba(0, 0, 80, .2)',
   shadowOffset: { width: 0, height: 0 }, // Deslocamento da sombra para iOS
   shadowOpacity: 1, // Opacidade da sombra para iOS
   shadowRadius: 6,
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: 15, marginRight: 15, marginTop: 10,
   borderColor: '#fff',
   borderWidth: 1.5,
 },  

 buttonText: {
   fontSize: 16,
   color: '#6E7178',
   marginTop: 10,
 },

   button: {
    padding: 10,
    borderRadius: 22,
    backgroundColor: 'black',
    width: '48%',
    height: 130,
    marginTop: 15, 
    borderWidth: 2,
    borderColor: '#fff',
    
  },

  defaultButton: {
    backgroundColor: '#F3F4F9',
    shadowColor: 'rgba(0, 0, 80, 0.2)',
    shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
    shadowOpacity: 6, // Opacidade da sombra para iOS
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButton: {
    backgroundColor: '#C6C9D6',
    shadowColor: 'rgba(0, 0, 80, 0.3)',
    shadowOffset: { width: 4, height: 4 }, // Deslocamento da sombra para iOS
    shadowOpacity: 10, // Opacidade da sombra para iOS
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D9DCE9',
  },


  defaultData:{
   backgroundColor: '#E9EAF3',
   borderRadius: 8,
  },
  buttonData:{
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataActive:{
    backgroundColor: '#92D881',
    borderWidth: 1,
    borderColor: '2B7419',
    borderRadius: 8,
  },


  
  espStatus: {
    alignItems: 'center', padding: 4, 
  },
  conected: {
    backgroundColor: '#358A20'
  },
  disconected: {
    backgroundColor: '#DA4747'
  },




  /// Energia
    containerSemanal:{
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 22,
      width: "100%",
      marginTop: 20,
    },
    leiturasEnergia:{
      flexDirection: 'row', flex: 1, justifyContent:'space-between', 
    alignItems: 'center',
    justifyContent: 'center'
    },
    containerTotal:{
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 22,
      width: "100%",
     padding: 20,
      marginTop: 20,
      height: 110,
      backgroundColor: '#4DAA37',
      shadowColor: 'rgba(0, 0, 80, 0.15)',
      shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
      shadowOpacity: 1, // Opacidade da sombra para iOS
      shadowRadius: 8,
    },
    textoClaro:{
     color: '#F5F6FA',
    },
    energia: {
      width: 155,
      height: 114,
      backgroundColor: '#F3F4F9',
      borderRadius: 22,
      shadowColor: 'rgba(0, 0, 80, 0.15)',
      shadowOffset: { width: 8, height: 8 }, // Deslocamento da sombra para iOS
      shadowOpacity: 1, // Opacidade da sombra para iOS
      shadowRadius: 8,
      borderWidth: 2,
      borderColor: '#fff',
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      },
      containerTarifa:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10, 
        marginTop: 10
      },
  containerInput:{
    height: 40, 
    //borderBottomWidth: 1, 
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 200, 
    textAlign: 'center', 
    borderColor: '#DDDDDD',
    margin: 10,
  },

      //Agua





      //Fonts
     fontLeitura:{
      fontSize: 32,
     },




     ///Históricos

     containerHistoricos:{
      marginBottom: 20,
      height: 42,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 4,
      shadowColor: 'rgba(0, 0, 80, 0.15)',
      shadowOffset: { width: 2, height: 4 }, // Deslocamento da sombra para iOS
      shadowOpacity: .5, // Opacidade da sombra para iOS
      shadowRadius: 4,
      textAlign: 'right',
      color: '#757575',
      borderLeftWidth: 6,
      borderColor: '#4DAA37',
},

    
})
