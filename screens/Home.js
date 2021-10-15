import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is homescreen</Text>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default Home
