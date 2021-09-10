import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './components/Theme'
import Home from './screens/Home'
import Modal from './screens/Modal'

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {},
  },
  {
    name: 'Modal',
    component: Modal,
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
      <StackNav
        screenOptions={{
          headerShown: true,
        }}
        screens={screens}
      />
    </NavigationContainer>
  )
}
