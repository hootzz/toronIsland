//components/HomeScreen.js
import React, { useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from './SearchInput';
import GradientButton from './GradientButton';

const HomeScreen = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setScrollViewWidth(width);
  };

  const buttonColors = [
    ['#94D3F7', '#AAE0FF'],
    ['#BEA5F2', '#C5AAFF'],
    ['#F2A3C9', '#FFAAD3'],
    ['black'] // Best
  ];

  const additionalTexts = ['어제', '11월 10일', '11월 8일'];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>토론섬</Text>

      <SearchInput />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Today</Text>
      <GradientButton
        colors={['#9CF095', '#AAF2A3']}
        onPress={() => navigation.navigate('Page1')}
        buttonText="버튼 1"
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Prev</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onLayout={handleLayout}
      >
        {[1, 2, 3, 4].map((buttonNumber, index) => (
          <View key={buttonNumber} style={{ margin: scrollViewWidth * 0 }}>
            <GradientButton
              colors={buttonColors[index]}
              onPress={() => navigation.navigate(`Page${buttonNumber}`)}
              buttonText={`버튼 ${buttonNumber}`}
              additionalText={index < additionalTexts.length && additionalTexts[index]}
            />
          </View>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Best</Text>
      <GradientButton
        colors={['#FFECA8', '#FFF3C9']}
        onPress={() => navigation.navigate('Page1')}
        buttonText="베스트 토론"
        additionalText=""
      />
    </View>
  );
};

export default HomeScreen;