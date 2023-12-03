import React, { useState, useRef, useEffect } from 'react';
import { Pressable,Image, TouchableOpacity, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, InputAccessoryView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AgreeInput = () => {
    useEffect(()=>{
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
          }) : null
    }, []);
    const [statusBarHeight, setStatusBarHeight] = useState(0);
    const initialText = '';
    const [text, setText] = useState(initialText);
    const styles = StyleSheet.create({
     
        textInput:{
            padding: 7,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '90%',
            fontSize: 14,
            paddingRight: 35,
            height: "90%"
        },
        InputContainer:{
            marginTop: "auto",
        },
        Button:{
            margin: 10
        },
        right:{
            alignItems: 'flex-end'
        },
        submitText:{
            fontSize: 18,
        },
        // submitButton:{
        //     width: 30,
        //     height: 30,
        //     marginLeft: 10
        // },
        inputStyle:{
            flexDirection: 'row',
        }
        
    });
    const sendMessage=()=>{
        console.log('message: ', messageText);
    }
   return(
    <KeyboardAvoidingView 
    style={styles.InputContainer}
    behavior={'padding'}
    keyboardVerticalOffset={statusBarHeight+50}
    >
        <View style={styles.inputStyle}>
             <TextInput style={styles.textInput}
             value={text}
             placeholder={'입력해 주세요.'}
              onChange={setText}
              autoCorrect={false}>
             </TextInput>
             <TouchableOpacity title="전송">
                <Image style={{ position: 'absolute', top: 5, left: 5, zIndex: 1, width: 30, height: 30 }} source={require('../../assets/submit.png')} />
                    </TouchableOpacity>    
        </View>
    </KeyboardAvoidingView>
    
   )
   
  };


export default AgreeInput;