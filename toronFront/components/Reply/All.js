import React from "react";
import {StyleSheet, View, ScrollView } from 'react-native';
import AgreeScreen from "./Agree";
import DisagreeScreen from "./Disagree";

const AllScreen = () => {
    
    return (
        <ScrollView contentContainerStyle = {{flexgrow : 1, alignItems : 'center', width : '100%', height : '100%'}} >
            <View style={styles.screenContainer} >
                <AgreeScreen/>
            </View>
            <View style={styles.screenContainer}>
                <DisagreeScreen/>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({

    screenContainer: {
        justifyContent : 'center',
        backgroundColor: 'pink',
        width : '100%',
        height : '20%',
        
     },

});

export default AllScreen;