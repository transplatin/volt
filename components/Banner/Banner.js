import { useTheme } from '@react-navigation/native'
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Banner = (props) => {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor || colors.background,
          borderRadius: props.round || colors.round,
          elevation: props.elevation || colors.elevation,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            fontSize: colors.fontSize,
          },
        ]}>
        {props.text}
      </Text>
      <View style={[styles.buttonGroup, { borderRadius: colors.round }]}>
        {props.leftText ? (
          <TouchableHighlight onPress={props.onPressLeft} style={styles.button}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: props.leftTextColor || colors.primary,
                  fontSize: colors.headerFontSize,
                },
              ]}>
              {props.leftText}
            </Text>
          </TouchableHighlight>
        ) : null}
        {props.rightText ? (
          <TouchableHighlight
            onPress={props.onPressRight}
            style={styles.button}>
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: colors.headerFontSize,
                  color: props.rightTextColor || colors.primary,
                },
              ]}>
              {props.rightText}
            </Text>
          </TouchableHighlight>
        ) : null}
      </View>
    </View>
  )
}
Banner.propTypes = {
  backgroundColor: PropTypes.string,
  round: PropTypes.number,
  elevation: PropTypes.number,
  text: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  leftTextColor: PropTypes.string,
  rightTextColor: PropTypes.string,
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    backgroundColor: 'red',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Banner
