import { useTheme } from '@react-navigation/native'
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'

const FloatButton = (props) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          height: props.size ? props.size + 20 : 100,
          width: props.size ? props.size + 20 : 100,
          backgroundColor: colors.primary,
          top: props.top || 0,
          bottom: props.bottom || 0,
          left: props.left || 0,
          right: props.right || 0,
        },
      ]}>
      <Icon name="add-circle" size={props.size || 80} />
    </TouchableOpacity>
  )
}

FloatButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
})

export default FloatButton
