import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme.js'
import Checkbox from 'expo-checkbox'

// support for android, and web only
const CheckBox = (props) => {
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

const styles = StyleSheet.create({
	checkbox: {
		margin: 0,
	},
})

export default CheckBox
