import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AgreeComment from './AgreeComment';

const AgreeCommentList=()=>{
    const [comments, setComments] = useState([]);
    const styles = StyleSheet.create({
        test:{
        }
    });
    const addComment = (newComment) => {
      setComments([...comments, newComment]);
    };

  return(
    <View style={styles.test}>
        
    <ScrollView>
         {/* {comments.map((comment, index) => (
        <AgreeComment key={index} comment={comment} />
      ))} */}
      <AgreeComment/>
      <AgreeComment/>
      <AgreeComment/>
      <AgreeComment/>
      <AgreeComment/>
      <AgreeComment/>
    </ScrollView>
    

    </View>
  );
}

export default AgreeCommentList;