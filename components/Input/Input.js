import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text, StyleSheet, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Input = (props) => {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.container,
        {
          ...props.style,
          margin: props.margin || colors.margin,
          elevation: props.elevation || colors.elevation,
          borderRadius: props.round || colors.round,
          borderWidth: props.borderWidth || colors.borderWidth,
          borderColor: props.borderColor || colors.borderColor,
          backgroundColor: colors.background,
          width: props.width ? props.width : '60%',
        },
        props.multiline && { height: 60 + 40 * props.numberOfLines },
      ]}>
      {props.value && props.value.length > 0 && !props.hideLabel ? (
        <View
          style={[
            styles.label,
            { borderRadius: colors.round, backgroundColor: colors.primary },
          ]}>
          <Text
            style={[
              styles.labelText,
              {
                color: colors.text,
                fontSize: colors.fontSize,
              },
            ]}>
            {props.label}
          </Text>
        </View>
      ) : null}

      <TextInput
        style={[
          styles.input,
          {
            borderRadius: props.round || colors.round,
            borderColor: props.borderColor || colors.borderColor,
            color: props.color || 'black',
            backgroundColor: props.backgroundColor || 'transparent',
            fontSize: colors.fontSize,
          },
          Platform.OS === 'web' && { outlineColor: props.borderColor },
        ]}
        placeholder={props.placeholder}
        value={props.value}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        onEndEditing={props.onEnd}
        editable={props.disable ? !props.disable : props.disable}
        secureTextEntry={props.secure}
        onChangeText={(e) => props.setInput(e)}
      />
    </View>
  )
}

Input.propTypes = {
  style: PropTypes.object,
  elevation: PropTypes.number,
  round: PropTypes.number,
  margin: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onEnd: PropTypes.func,
  secure: PropTypes.bool,
  setInput: PropTypes.func,
  multiline: PropTypes.bool,
  width: PropTypes.string,
  numberOfLines: PropTypes.number,
  disable: PropTypes.bool,
  color: PropTypes.string,
  hideLabel: PropTypes.bool,
  backgroundColor: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '95%',
    marginTop: 20,
  },
  input: {
    height: '100%',
    width: '100%',
    padding: 10,
    paddingHorizontal: 20,
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    top: -16,
    left: 0,
  },
  labelText: {
    fontWeight: 'bold',
  },
})

export default Input
