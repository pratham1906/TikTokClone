import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/Home';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab=createBottomTabNavigator();
const HomeBottomTabNavigator = () => {
    return (
      
            <Tab.Navigator tabBarOptions={{
                tabStyle:{
                    backgroundColor:'#000'
                },
                activeTintColor:"#fff"
            }}>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Entypo name="home" color={color} size={25}/>
                    )
                }}/>
                <Tab.Screen name="Search" component={HomeScreen}
                 options={{
                    tabBarIcon:({color})=>(
                        <AntDesign name="search1" color={color} size={25}/>
                    )
                }}/>
                <Tab.Screen name="Upload" component={HomeScreen}
                 options={{
                    tabBarIcon:({color})=>(
                        <Entypo name="home" color={color} size={25}/>
                    )
                }}/>
                <Tab.Screen name="Inbox" component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="message-minus-outline" color={color} size={25}/>
                    )
                }}/>
                <Tab.Screen name="Profile" component={HomeScreen}
                 options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name="person-outline" color={color} size={25}/>
                    )
                }}/>

            </Tab.Navigator>
        
    )
}

export default HomeBottomTabNavigator


