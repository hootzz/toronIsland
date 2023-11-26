import React, { useState, useRef, useEffect } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, InputAccessoryView } from 'react-native';

const AgreeInput = () => {
    const initialText = '';
    const [text, setText] = useState(initialText);
    const styles = StyleSheet.create({
        InputBox:{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
        },
        textInput:{
            padding: 7,
            backgroundColor: 'white',
            borderRadius: 10,
            width: 280
        
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
        submitButton:{
            width: 30,
            height: 30,
            marginLeft: 10
        },
        buttonStyle:{
            alignItems: 'center'
        }
        
    });
   return(
    <KeyboardAvoidingView style={styles.InputBox}>
        <View keyboardDismissMode='interactive'>
            <View >
             <TextInput style={styles.textInput}
             value={text}
             placeholder={'의견을 입력해 주세요.'}
              onChange={setText}
              autoFocus={true}
              keyboardType="numeric">
                
             </TextInput>
            </View>
            
        </View>

        <View style={styles.inputStyle}>
            <View style={styles.right}>
                <TouchableOpacity style={styles.buttonStyle} title="전송">
                <Image style={styles.submitButton} source={require('../../assets/submit.png')} />
                    </TouchableOpacity>    
            </View>
        </View>
    </KeyboardAvoidingView>
    
   )
   
  };


export default AgreeInput;