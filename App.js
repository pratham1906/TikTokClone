import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import RootNavigator from './Navigators'
import HomeScreen from './src/screens/Home/index'

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
   <SafeAreaView style={{flex:1}}>
<RootNavigator/>
</SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
