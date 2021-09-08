import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Button = (props) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          ...props.style,
          backgroundColor: props.backgroundColor || colors.primary,
          borderRadius: props.round || colors.round,
          elevation: props.elevation || colors.elevation,
          borderWidth: props.borderWidth || colors.borderWidth,
          borderColor: props.borderColor || colors.borderColor,
        },
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          styles.title,
          {
            fontSize: props.titleSize || colors.fontSize,
            color: props.titleColor || colors.text,
          },
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  round: PropTypes.number,
  elevation: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  onPress: PropTypes.func,
  titleSize: PropTypes.number,
  titleColor: PropTypes.string,
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 50,
  },
  title: {
    fontWeight: '500',
  },
})

export default Button
