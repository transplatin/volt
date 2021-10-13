import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

// while use normal toggleButton with style of radiobutton here
const RadioButton = (props) => {
	const { colors } = useTheme()
	return (
		<View
			style={[
				styles.container,
				{
					height: props.height || 16,
					width: props.width || 16,
					borderRadius: props.borderRadius || 12,
					borderWidth: props.borderWidth || 2,
					borderColor: props.borderColor || colors.primary,
				},
				props.style,
			]}>
			{props.selected ? (
				<View
					style={{
						height: props.height || 8,
						width: props.width || 8,
						borderRadius: props.borderRadius || 6,
						backgroundColor: props.backgroundColor || colors.primary,
					}}
				/>
			) : null}
		</View>
	)
}

RadioButton.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	borderRadius: PropTypes.number,
	borderWidth: PropTypes.number,
	borderColor: PropTypes.string,
	selected: PropTypes.bool,
	backgroundColor: PropTypes.string,
	style: PropTypes.object,
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default RadioButton
