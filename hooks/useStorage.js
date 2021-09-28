import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = (key) => {
  // Data
  const [data, setData] = useState({})

  // getData
  const getData = async () => {
    try {
      const tempData = await AsyncStorage.getItem(key)
      if (tempData !== null) {
        setData(JSON.parse(tempData))
        console.log(`Got data for key ${key}`)
      } else {
        console.log(`No data is stored for key ${key}`)
      }
    } catch (e) {
      console.error(e)
    }
  }
  // Set Data
  const storeData = async (jsonData) => {
    try {
      const tempData = JSON.stringify(jsonData)
      await AsyncStorage.setItem(key, tempData)
      getData()
      console.log(`Data for key ${key} is stored`)
    } catch (e) {
      console.error(e)
    }
  }
  // EraseData
  const eraseData = async () => {
    try {
      await AsyncStorage.removeItem(key)
      setData({})
      console.log(`The data for key ${key} is removed succesfully`)
    } catch (e) {
      console.error(e)
    }

    console.log('Done.')
  }
  useEffect(() => {
    getData()
  }, [])
  return [data, getData, storeData, eraseData]
}

export default useStorage
