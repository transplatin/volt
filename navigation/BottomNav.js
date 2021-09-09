import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

const Tab = createBottomTabNavigator()

const BottomNav = (props) => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.text,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textAlign: 'center',
        },
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontSize: colors.fontSize - 2,
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textDisabled,
        ...props.screenOptions,
      })}
      initialRouteName="Home">
      {props.screens &&
        props.screens.length > 0 &&
        props.screens.length < 6 &&
        props.screens.map((e) => {
          return (
            <Tab.Screen
              key={e.name}
              name={e.name}
              options={e.options}
              component={e.component}
            />
          )
        })}
    </Tab.Navigator>
  )
}

BottomNav.propTypes = {
  screens: PropTypes.array,
  options: PropTypes.object,
  screenOptions: PropTypes.object,
}

export default BottomNav
