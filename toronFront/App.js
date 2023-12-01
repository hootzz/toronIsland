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
const Drawer = createDrawerNavigator(); 

export default function App() {
  const [data, setData] = useState('');

  const onPressMenu = (navigation) => {
  navigation && navigation.navigate('MyPage');
};

const onPressNotifications = (navigation) => {
  navigation && navigation.navigate('Alert');
};

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
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Home">
  //     <Stack.Screen name="Home" component={HomeScreen} 
  //                   options={{
  //                     headerLeft: ({ navigation }) => (
  //                       <TouchableOpacity onPress={() => navigation && navigation.navigate('My Page')}>
  //                         <Ionicons name="menu" size={30} style={"margin:10"} />
  //                       </TouchableOpacity>
  //                       //toggle로 열리게 하려다가 망한 코드입니다
  //                     ),
  //                     headerRight: ({ navigation }) => (
  //                       <TouchableOpacity onPress={() => navigation && navigation.navigate('Alert')}>
  //                         <Ionicons name="notifications" size={25} />
  //                       </TouchableOpacity>
  //                       // 이것도 이상하게 화면이 안 넘어가네요?
  //                     ),
  //                   }}
  //       />
  //     <Stack.Screen name="Alert" component={AlertScreen} />
  //     <Stack.Screen name="My Page" component={MypageScreen} />
  //     <Stack.Screen name="Board" component={AgreeMain} />
  //     <Stack.Screen name="Best" component={BestScreen} />
  //     <Stack.Screen name="Start" component={StartScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer>
    <StartScreen></StartScreen>
  );
};