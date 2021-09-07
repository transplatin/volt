import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

const Icon = (props) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
      }}>
      <Ionicons
        name={props.name}
        size={props.size || colors.fontSize}
        color={props.color || colors.text}
      />
    </View>
  )
}
export default Icon
