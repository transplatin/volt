import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './components/Theme'
import Home from './screens/Home'
import BottomNav from './navigation/BottomNav'
import Icon from './components/Icon'

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = 'md-home'
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
    },
  },
  {
    name: 'Analytics',
    component: Home,
    options: {
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = 'analytics'
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
    },
  },
  {
    name: 'Cart',
    component: Home,
    options: {
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = 'basket'
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
    },
  },
  {
    name: 'Save',
    component: Home,
    options: {
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = 'bookmark'
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
    },
  },
  {
    name: 'Settings',
    component: Home,
    options: {
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = 'md-settings'
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
    },
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
