import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

const ToronCard = ({ date, title, participants }) => {
  const [participantsWidth, setParticipantsWidth] = useState(0);

  useEffect(() => {
    // participants 길이에 따라서 달라짐
    // [추후 수정] participants 수에 자동 쉼표 추가 (어렵나?)
    setParticipantsWidth(participants.toString().length * 10 + 70);
  }, [participants]);

  return (
    <View style={styles.cardContainer}>

      <View style={styles.titleContainer}>
        <Text style={styles.date}>{date}</Text>
      </View> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.participantsContainer}>
        <View
          style={{
            alignItems: 'center',
            width: participantsWidth,
            marginTop: 8,
            backgroundColor: '#EFEFEF',
            padding: 3,
            borderRadius: 20
          }}>
          <Text style={styles.participantsText}>{participants} 명 참여</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 10,
    backgroundColor: "rgba(255, 255, 255, 1)", //마지막은 투명도
    padding: 25,
    margin: 8,
    elevation: 3,
    borderRadius: 15,
    marginBottom: 20, 
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    marginTop: 8,
    color: '#282828',
  },
  participantsText: {
    fontSize: 12,
    color: '#000000',
  },
  titleContainer: {
    padding: 3,
    alignItems: 'center', // 가로 중앙 정렬, 세로는 뭐더라?
  },
  participantsContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    marginBottom: 10 
  }
});

export default ToronCard;
