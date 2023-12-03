import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const AgreeComment =()=>{
    const styles = StyleSheet.create({
        comment:{
            padding: 25,
            alignItems: 'center',
            justifyContent: 'center',
        },
        commentBox:{
            padding: 22,
            backgroundColor: 'rgba(255,255,255,0.85)',
            borderRadius: 30,
            elevation: 1,
            
        },
        profileImage:{
            // profile image 크기 
            width: 35,
            height: 35,
            borderRadius: 50
        },
        profileBox:{
            // 이미지, 사용자 프로필 사진 가로 정렬 
            flexDirection: 'row',
            margin: 5
        },
        nameBox:{ 
            marginLeft: 10
        },
        nikName:{
            fontSize: 13,
            fontWeight: 'bold'
        },
        minute:{
            marginTop: 5,
            color: '#B3B3B3',
            fontSize: 10
        },
        commentTextBox:{
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 3,
        },
        commentText:{
            fontWeight: '500',
            fontSize: 12
        }
    })
    return(
        <View style={styles.comment}>
        <View style={styles.commentBox}>
            <View style={styles.profileBox}>
            <View style={styles.imageBox}><Image style={styles.profileImage}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}></Image></View> 
            <View style={styles.nameBox}>
                <Text style={styles.nikName}>닉네임</Text>
                <Text style={styles.minute}>n분 전</Text>
                </View>
            </View>
        
            <View style={styles.commentTextBox}>
                <Text style={styles.commentText}>
                    저는 이렇게 생각하고 저렇게 생각하고 
                    이런 건 이렇게 해야 한다고 생각합니다
                </Text>
            </View>
            
      </View>

    
      </View>
    )
}

export default AgreeComment;