import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const TextButton = (props) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor || 'transparent',
        },
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          styles.text,
          {
            fontSize: props.fontSize || colors.fontSize,
            color: props.color || colors.primary,
            fontWeight: props.fontWeight || 'bold',
          },
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

TextButton.propTypes = {
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TextButton
