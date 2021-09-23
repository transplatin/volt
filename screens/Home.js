import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import CodeEditor from '../components/CodeEditor'

const Home = () => {
  return (
    <View style={styles.container}>
      {/*   <View style={styles.key}>
       <Input
          label="Secret Key"
          value="afhaieryabircai"
          placeholder="Secret Key"
          secure
        />
        <Button title="COPY" />
    </View> */}
      <View style={[styles.utterance]}>
        <Input
          label="Utterance"
          width="90%"
          value="Buy me a coffee"
          placeholder="Buy me a coffee"
        />
      </View>
      <CodeEditor
        height="90vh"
        theme="vs-dark"
        defaultValue="//Write your code"
        defaultLanguage="javascript"
      />
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
  utterance: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  key: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default Home
