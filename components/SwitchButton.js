import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme.js'

// works on android, ios and web
export const SwitchButton = (props) => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	return (
		<Switch
			style={styles.switchButton}
			trackColor={{
				false: props.disabledColor || Theme.colors.warning,
				true: props.enabledColor || Theme.colors.success,
			}}
			thumbColor={
				isEnabled
					? props.enabledColor
						? props.enabledColor
						: Theme.colors.success
					: props.disabledColor
					? props.disabledColor
					: Theme.colors.warning
			}
			ios_backgroundColor={props.ios_backgroundColor || Theme.colors.warning}
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
