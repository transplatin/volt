import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import Icon from './Icon'

const Accordion = (props) => {
  const [expand, setExpand] = useState(false)
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.container,
        {
          elevation: props.elevation || colors.elevation,
          borderRadius: props.round || colors.round,
        },
      ]}>
      <TouchableOpacity
        style={[
          styles.accordionWrapper,
          {
            backgroundColor: props.backgroundColor || colors.primary,
            elevation: props.elevation || colors.elevation,
            borderRadius: props.borderRadius || colors.round,
          },
        ]}
        onPress={() => setExpand(!expand)}>
        <View style={[styles.textWrapper, {}]}>
          <Text
            style={[
              styles.text,
              { fontSize: colors.fontSize, color: colors.text },
            ]}>
            {props.label}
          </Text>
        </View>
        <View style={[styles.textWrapper, {}]}>
          <Icon
            name={
              expand
                ? 'chevron-up-circle-outline'
                : 'chevron-down-circle-outline'
            }
            size={24}
          />
        </View>
      </TouchableOpacity>
      {expand ? (
        <View
          style={[
            styles.accordionContent,
            {
              ...props.accordionStyle,
              backgroundColor: props.backgroundColor || colors.background,
              borderWidth: props.accordionBorderWidth || colors.borderWidth,
              borderColor: props.accordionBorderColor || colors.borderColor,
            },
          ]}>
          {props.component}
        </View>
      ) : null}
    </View>
  )
}

Accordion.propTypes = {
  elevation: PropTypes.number,
  round: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  label: PropTypes.string,
  accordionStyle: PropTypes.object,
  accordionBorderWidth: PropTypes.number,
  accordionBorderColor: PropTypes.string,
  component: PropTypes.element,
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  accordionWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    padding: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Accordion
