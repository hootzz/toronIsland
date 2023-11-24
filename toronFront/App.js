import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AgreeMain from './components/AgreeJang/AgreeMain';

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
    <View>
    </View>
  );
};