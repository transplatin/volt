import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

const Icon = (props) => {
  const { colors } = useTheme()
  const getIcon = () => {
    switch (props.family) {
      case 'AntDesign':
        return (
          <AntDesign
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Entypo':
        return (
          <Entypo
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'EvilIcons':
        return (
          <EvilIcons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Feather':
        return (
          <Feather
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'FontAwesome':
        return (
          <FontAwesome
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'FontAwesome5':
        return (
          <FontAwesome5
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Fontisto':
        return (
          <Fontisto
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Foundation':
        return (
          <Foundation
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'MaterialIcons':
        return (
          <MaterialIcons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Octicons':
        return (
          <Octicons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      case 'Zocial':
        return (
          <Zocial
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
      default:
        return (
          <Ionicons
            style={{ textAlign: 'center' }}
            name={props.name}
            size={props.size || colors.fontSize}
            color={props.color || colors.text}
          />
        )
    }
  }
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 15,
          backgroundColor: props.backgroundColor || 'transparent',
        },
      ]}>
      {getIcon()}
    </View>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  family: PropTypes.string,
}

export default Icon
