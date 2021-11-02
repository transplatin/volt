import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@react-navigation/native'
import { StyleSheet, Switch } from 'react-native'

// works on android, ios and web
export const SwitchButton = (props) => {
  const { colors } = useTheme()

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <Switch
      style={styles.switchButton}
      trackColor={{
        false: props.disabledColor || colors.textDisabled,
        true: props.enabledColor || colors.success,
      }}
      thumbColor={
        isEnabled
          ? props.enabledColor
            ? props.enabledColor
            : colors.primary
          : props.disabledColor
          ? props.disabledColor
          : colors.textDisabled
      }
      ios_backgroundColor={props.ios_backgroundColor || colors.textDisabled}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

SwitchButton.propTypes = {
  disabledColor: PropTypes.string,
  enabledColor: PropTypes.string,
  ios_backgroundColor: PropTypes.string,
}

const styles = StyleSheet.create({
  switchButton: {
    margin: 0,
  },
})

export default SwitchButton
