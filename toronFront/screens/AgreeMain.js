
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView,StyleSheet, Text, View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import AgreeHeader from "../components/AgreeJang/AgreeHeader";
import AgreeContainer from "../components/AgreeJang/AgreeContainer";
import AgreeComment from "../components/AgreeJang/AgreeComment";
import { LinearGradient } from 'expo-linear-gradient'
import AgreeInput from "../components/AgreeJang/AgreeInput";
// background FDC8E1: 왼쪽 끝 : 연분홍
// CFBAFD 그 다음 : 연보라 
// A8F1A1 그 다음 : 연두
// C2F4FC 그 다음 : 연하늘 
const  AgreeMain =()=> {
    const styles = StyleSheet.create({
        main:{
            flex: 1,
            padding: 20,
            
          },
        agreeComment:{
            flex: 3,
            backgroundColor: 'pink'
        },
        agreeContainer:{
            flex: 2,
            zIndex: 2
        },
        AgreeInputStyle:{
            flex: 1,
            zIndex: 1
        }
       
    })
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

                <View style={styles.agreeContainer}><AgreeContainer /></View>
                
                <ScrollView 
                 keyboardShouldPersistTaps="handled"
                // 스크롤 바를 숨기는 속성 
                showsVerticalScrollIndicator={false}
                style={styles.agreeComment}>
                    <AgreeComment />
                    <AgreeComment />
                </ScrollView>
                
                <AgreeInput style={styles.AgreeInputStyle}/>
                
            <StatusBar style="auto" />

        </View> 
    )
}

export default AgreeMain;