import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Switch } from 'react-native'
import Checkbox from 'expo-checkbox'
import Theme from './Theme.js'

// support for android, and web only
export const CheckBox = (props) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <Checkbox
      value={isChecked}
      style={styles.checkbox}
      disabled={props.disabled}
      color={
        isChecked
          ? props.color
            ? props.color
            : Theme.colors.primary
          : undefined
      }
      onChange={props.onChange}
      onValueChange={setChecked}
    />
  )
}

CheckBox.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  onChange: PropTypes.func,
}

// while use normal toggleButton with style of radiobutton here
export const RadioButton = () => {
  return null
}

// works on android, ios and web
export const SwitchButton = (props) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <Switch
      style={styles.switchButton}
      trackColor={{
        false: props.disabledColor || Theme.colors.warning,
        true: props.enabledColor || Theme.colors.success,
      }}
      thumbColor={
        isEnabled
          ? props.enabledColor
            ? props.enabledColor
            : Theme.colors.success
          : props.disabledColor
          ? props.disabledColor
          : Theme.colors.warning
      }
      ios_backgroundColor={props.ios_backgroundColor || Theme.colors.warning}
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
  checkbox: {
    margin: 0,
  },
  switchButton: {
    margin: 0,
  },
})
