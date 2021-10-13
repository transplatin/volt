import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const HeaderText = (props) => {
  const { colors } = useTheme()
  return (
    <Text
      style={[
        {
          fontSize: props.fontSize || colors.headerFontSize,
          color: props.color || colors.primary,
          fontWeight: 'bold',
          textAlign: 'center',
          margin: 10,
        },
      ]}>
      {props.text}
    </Text>
  )
}

HeaderText.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
}

export default HeaderText
