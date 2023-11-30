import React from 'react';
import { Image } from 'react-native';

const BackButton = () => {
  return (
      <Image style={{marginHorizontal:10, width:20, height:20, marginTop: 50}} source={require('../../assets/back.png')} />
  );
};


export default BackButton;