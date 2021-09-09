import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './components/Theme'
import Home from './screens/Home'
import BottomNav from './navigation/StackNav'

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {},
  },
  {
    name: 'Analytics',
    component: Home,
    options: {
      headerStyle: {
        backgroundColor: 'red',
      },
    },
  },
  {
    name: 'Cart',
    component: Home,
    options: {},
  },
  {
    name: 'Save',
    component: Home,
    options: {},
  },
  {
    name: 'Settings',
    component: Home,
    options: {},
  },
]

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <BottomNav
        screenOptions={{
          headerShown: true,
        }}
        screens={screens}
      />
    </NavigationContainer>
  )
}
