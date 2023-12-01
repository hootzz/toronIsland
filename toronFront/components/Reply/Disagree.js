import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CommentBox from "../components/CommentBox";

const DisagreeScreen = () => {

    const DisagreeColor = ['#A6F0F0', '#C9F5FF']

    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1, alignItems : 'center'}}>
            <CommentBox colors={DisagreeColor}/>
        </ScrollView>
    )
}
export default DisagreeScreen;