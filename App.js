import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import HomeScreen from './src/screens/Home/index'

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
<HomeScreen/>
    </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
