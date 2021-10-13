import React from 'react'
import { Platform, ActivityIndicator, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

const CircularIndicator = (props) => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator
        size={props.size}
        color={props.color ? props.color : colors.primary}
        animating={props.animating}
      />
      {Platform.OS === 'ios' && (
        <ActivityIndicator
          size={props.size}
          color={props.color ? props.color : colors.primary}
          animating={props.animating}
          hidesWhenStopped={props.hidesWhenStopped}
        />
      )}
    </View>
  )
}

CircularIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  animating: PropTypes.bool,
  hidesWhenStopped: PropTypes.bool,
  color: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

export default CircularIndicator
