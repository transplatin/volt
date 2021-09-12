import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

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
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.text,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textAlign: 'center',
        },
        ...props.screenOptions,
      }}
      initialRouteName="Home">
      {props.screens &&
        props.screens.map((e) => {
          return (
            <Drawer.Screen
              key={e.name}
              name={e.name}
              options={e.options}
              component={e.component}
            />
          )
        })}
    </Drawer.Navigator>
  )
}
DrawerNav.propTypes = {
  screens: PropTypes.array,
  screenOptions: PropTypes.object,
}
export default DrawerNav
