import React from 'react'
import PropTypes from 'prop-types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const StackNav = (props) => {
  const { colors } = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.text,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textAlign: 'center',
        },
        ...props.screenOptions,
      }}>
      {props.screens &&
        props.screens.map((e) => {
          return (
            <Stack.Screen
              key={e.name}
              name={e.name}
              options={e.options}
              component={e.component}
            />
          )
        })}
    </Stack.Navigator>
  )
}

StackNav.propTypes = {
  screens: PropTypes.array,
  screenOptions: PropTypes.object,
}

export default StackNav
