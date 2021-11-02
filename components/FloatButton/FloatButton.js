import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '../Icon/Icon'
import { useTheme } from '@react-navigation/native'

const FloatButton = (props) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
          width: props.size || 50,
          height: props.size || 50,
        },
        {
          position: 'absolute',
          left: props.left,
          right: props.right,
          bottom: props.bottom,
          top: props.top,
        },
      ]}>
      <Icon
        name={props.name}
        family={props.family}
        color={props.color}
        size={props.size || 50}
      />
    </TouchableOpacity>
  )
}

FloatButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  family: PropTypes.family,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default FloatButton
