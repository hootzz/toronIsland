import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import AgreeHeader from "../components/AgreeJang/AgreeHeader";
import AgreeContainer from "../components/AgreeJang/AgreeContainer";
import { LinearGradient } from 'expo-linear-gradient'
import AgreeInput from "../components/AgreeJang/AgreeInput";
import AgreeCommentList from "../components/AgreeJang/AgreeCommentList";

// background FDC8E1: 왼쪽 끝 : 연분홍
// CFBAFD 그 다음 : 연보라 
// A8F1A1 그 다음 : 연두
// C2F4FC 그 다음 : 연하늘 

const  AgreeMain =({navigation})=> {

    const styles = StyleSheet.create({
        main:{
            flex: 1,
            padding: 20,

          },
        agreeContainer:{
            flex: 4,
        },
        agreeCommentInputContainer: {
            flex: 4, // 댓글 목록과 인풋에 대한 비율 조정
          },
        
       
    })
    // 리액트 자동 설정 상단 바 삭제 
    React.useLayoutEffect(() => {
        // Ensure that navigation is defined before using setOptions
        if (navigation) {
          navigation.setOptions({
            headerShown: false,
          });
        }
      }, [navigation]);

    return(
        <View style={styles.main}>
            <LinearGradient  colors={['rgba(253,200,209,0.3)','rgba(207,186,253,0.3)','rgba(168,241,161,0.3)','rgba(194,244,252,0.3)']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}

            ></LinearGradient>

            <View style={styles.agreeHeader}>
                <AgreeHeader />
            </View>

            <View style={styles.agreeContainer}>
                <AgreeContainer />
            </View>

           <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}
            style={styles.agreeCommentInputContainer}>
                {/* <AgreeCommentList  style={styles.agreeCommentList}/> */}
                <AgreeCommentList />
                <AgreeInput style={styles.AgreeInputStyle}/>

            </KeyboardAvoidingView> 

            <StatusBar style="auto" />

        </View> 
    )
}

export default AgreeMain;