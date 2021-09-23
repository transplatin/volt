import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './components/Theme'
import Home from './screens/Home'
import StackNav from './navigation/DrawerNav'
import Icon from './components/Icon'

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Dashboard',
      headerShown: true,
      drawerIcon: (focused, size) => (
        <Icon name="home" size={20} family="AntDesign" />
      ),
    },
  },
  {
    name: 'Services',
    component: Home,
    options: {
      title: 'Services',
      headerShown: true,
      drawerIcon: (focused, size) => (
        <Icon name="lock" size={20} family="AntDesign" />
      ),
    },
  },
  {
    name: 'Analytics',
    component: Home,
    options: {
      title: 'Analytics',
      headerShown: true,
      drawerIcon: (focused, size) => (
        <Icon name="home" size={18} family="AntDesign" />
      ),
    },
  },
  {
    name: 'Data',
    component: Home,
    options: {
      title: 'Data',
      headerShown: true,
      drawerIcon: (focused, size) => (
        <Icon name="database" size={18} family="AntDesign" />
      ),
    },
  },
]

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <StackNav
        screenOptions={{
          headerShown: true,
        }}
        screens={screens}
      />
    </NavigationContainer>
  )
}
