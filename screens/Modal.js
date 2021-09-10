import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

const Modal = ({ route, text, style }) => {
	const navigation = useNavigation()

	const { colors } = useTheme()
	return (
		<View style={[...style, styles.container]}>
			<Text style={{ fontSize: props.fontSize || 30 }}>{text}</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default Modal
