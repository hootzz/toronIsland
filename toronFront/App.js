import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BestScreen from './screens/BestScreen';
import HomeScreen from './screens/HomeScreen';

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Best" component={BestScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};