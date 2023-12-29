import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AgreeComment from './AgreeComment';

const AgreeCommentList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // 서버에서 댓글 목록을 가져와서 setComments로 업데이트
        const fetchComments = async () => {
          try {
            const response = await fetch('http://192.168.35.243:3000/comments'); // //놑북IPv4 주소를 넣어야 오류가 안 생기더라구요...? 원래 이런건가
            const data = await response.json();
            setComments(data);
          } catch (error) {
            console.error('댓글 가져오기 에러:', error);
          }
        };
    
        // 컴포넌트가 마운트될 때와 comments가 변경될 때마다 실행
        fetchComments();
      }, [comments]);
    return (
        <View style={styles.test}>
            <ScrollView>
                {comments.map((comment, index) => (
                    <AgreeComment key={index} comment={comment} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    test: {},
});

export default AgreeCommentList;