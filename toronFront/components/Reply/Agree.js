import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CommentBox from "../components/CommentBox";

const AgreeScreen = () => {
    const AgreeColor = ['#FFE0B2', '#FFF1CF']

    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1, alignItems : 'center'}}>
            <CommentBox colors={AgreeColor}/>
        </ScrollView>
    )
}
export default AgreeScreen;