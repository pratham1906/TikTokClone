import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../src/screens/Home';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';

const Stack=createStackNavigator();;
const RootNavigator=()=>{
return(
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeBottomTabNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}


export default RootNavigator