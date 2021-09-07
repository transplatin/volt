import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './components/Theme'
import DrawerNav from './navigation/DrawerNav'

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <DrawerNav />
    </NavigationContainer>
  )
}
