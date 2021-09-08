import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

const DrawerNav = (props) => {
  const { colors } = useTheme()
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: colors.text,
        drawerStyle: {
          backgroundColor: colors.primary,
        },
        drawerType:
          Dimensions.get('window').width > 786 ? 'permanent' : 'slide',
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.text,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }}
        component={Home}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav
