import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from '@react-native-picker/picker'
import { useTheme } from '@react-navigation/native'

const PickerComponent = (props) => {
  const { colors } = useTheme()
  return (
    <Picker
      style={{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: colors.borderWidth,
        borderRadius: colors.round,
        elevation: colors.elevation,
      }}
      itemStyle={{
        fontSize: 25,
      }}
      selectedValue={props.value}
      onValueChange={(itemValue, itemIndex) => props.onChange(itemValue)}>
      {props.list &&
        props.list.map((e) => {
          return <Picker.Item label={e.label} key={e.label} value={e.value} />
        })}
    </Picker>
  )
}

PickerComponent.propTypes = {
  value: PropTypes.string,
  list: PropTypes.array,
  onChange: PropTypes.func,
}

export default PickerComponent
