import React from 'react'
import { View, Text} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1, backgroundColor: "#F5F6FA"}}>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
      <View>
      <Text style={{marginLeft: 20, color: "#A1A0A0"}}>Desenvolvido por:</Text>
      <Text style={{marginLeft: 20, marginBottom: 20, fontSize: 18, color: "#A1A0A0"}}>Thales Salla</Text>
    </View>
    </View>
  ) 
}

export default CustomDrawer