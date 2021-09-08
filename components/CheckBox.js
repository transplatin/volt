import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'

// support for android, and web only
const CheckBox = (props) => {
	const { colors } = useTheme()

	const [isChecked, setChecked] = useState(false)
	return (
		<Checkbox
			value={isChecked}
			style={styles.checkbox}
			disabled={props.disabled}
			color={
				isChecked ? (props.color ? props.color : colors.primary) : undefined
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

const styles = StyleSheet.create({
	checkbox: {
		margin: 0,
	},
})

export default CheckBox
