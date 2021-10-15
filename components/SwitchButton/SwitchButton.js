import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@react-navigation/native'

// works on android, ios and web
export const SwitchButton = (props) => {
	const { colors } = useTheme()

	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	return (
		<Switch
			style={styles.switchButton}
			trackColor={{
				false: props.disabledColor || colors.warning,
				true: props.enabledColor || colors.success,
			}}
			thumbColor={
				isEnabled
					? props.enabledColor
						? props.enabledColor
						: colors.success
					: props.disabledColor
					? props.disabledColor
					: colors.warning
			}
			ios_backgroundColor={props.ios_backgroundColor || colors.warning}
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
	switchButton: {
		margin: 0,
	},
})
