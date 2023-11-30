import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';


export default function StartIndex(){
    const [fontLoad, setFontLoad] = useState(false);
    useEffect(()=>{
        async function loadFont(){
            await Font.loadAsync({
                interReg : require('../assets/fonts/Inter-Regular.ttf'),
                interSem : require('../assets/fonts/Inter-SemiBold.ttf')
            });
            setFontLoad(true);
        }
        loadFont();
    }, []);
    if(!fontLoad){
        return null;
    }
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.subTitle}>토론섬간단</Text>
                <Text style={styles.subTitle}>소개문구정도...</Text>
                <Text style={styles.mainTitle}>토론섬</Text>
            </View>
            <View style={styles.signup}>
                <Text style={styles.signupText}>SNS 계정으로 간편 가입하기</Text>
                <View style={styles.signupBtn}>
                    <Image 
                        source={require('../assets/kakao.png')}
                        style={styles.btn}></Image>
                    <Image 
                        source={require('../assets/naver.png')}
                        style={styles.btn}></Image>
                    <Image 
                        source={require('../assets/google.png')}
                        style={styles.btn}></Image>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body : {
        backgroundColor : '#fff',
        width : '100%',
        height : '100%'
    },
    header : {
        flex : 1,
        backgroudColor : '#fcc',
        justifyContent : 'center'
    },
    subTitle : {
        fontFamily : 'interReg',
        fontSize : 30,
        marginLeft : 30,
        color : '#000',
        textAlign : 'left'
    },
    mainTitle : {
        fontFamily : 'interSem',
        fontSize : 50,
        marginLeft : 30,
        fontWeight : 'bold',
        color : '#000',
        textAlign : 'left'
    },
    signup : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent : 'center'
    },
    signupText : {
        fontFamily : 'interReg',
        fontSize : 13,
        color : '#b3b3b3',
        textAlign : 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupBtn : {
        width : '80%',
        height : '20%',
        marginTop : '3%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'row'
    },
    btn : {
        width : '25%',
        height : '100%',
        resizeMode : 'contain',
        margin : '3%'
    }
});