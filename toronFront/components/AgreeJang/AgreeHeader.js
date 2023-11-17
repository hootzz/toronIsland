import React from "react";
import { TouchableOpacity ,StyleSheet, Text, View, StatusBar, Image, SafeAreaView  } from 'react-native';


const  AgreeHeader =()=> {
    
const styles = StyleSheet.create({
      header:{
        flex: 1,
        
      },
      title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50
      },
      backImage:{
        width: 30,
        height: 30
      }
})
    return(
      <SafeAreaView  style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.backImage} source={require('../back.png')}></Image>
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Text style={styles.title}>토론의 장</Text>
            <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    )
}

export default AgreeHeader;