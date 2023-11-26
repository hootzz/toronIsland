import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import BestScreen from './screens/BestScreen';
import HomeScreen from './screens/HomeScreen';
import AgreeMain from './screens/AgreeMain';
import AlertScreen from './screens/alert';
import StartScreen from './screens/startIndex';
import MypageScreen from './screens/mypage';

const Stack = createStackNavigator();

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // 서버로부터 데이터를 가져오는 예시
    axios.get('http://localhost:3000')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} 
                    options={{
                      headerLeft: ({ navigation }) => (
                        <TouchableOpacity
                          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                        >
                          <Ionicons name="menu" size={30} />
                        </TouchableOpacity>
                      ),
                      headerRight: () => (
                        <TouchableOpacity onPress={() => alert('Notification')}>
                          <Ionicons name="notifications" size={25} />
                        </TouchableOpacity>
                      ),
                    }}
        />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="Board" component={AgreeMain} />
      <Stack.Screen name="Best" component={BestScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="My Page" component={MypageScreen} />
      </Drawer.Navigator>
    </Stack.Navigator>
  </NavigationContainer>
  );
};