import { useTheme } from '@react-navigation/native'
import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Platform } from 'react-native'

const Divider = (props) => {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.container,
        { borderWidth: 0.3, borderColor: props.color || colors.textDisabled },
        Platform.OS === 'web' && { borderWidth: 0, borderTopWidth: 0.25 },
      ]}></View>
  )
}

Divider.propTypes = {
  color: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})

export default Divider
