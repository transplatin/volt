import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import { Dimensions } from 'react-native'
import Theme from './components/Theme'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator
        screenOptions={{
          drawerType:
            Dimensions.get('window').width > 786 ? 'permanent' : 'slide',
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
