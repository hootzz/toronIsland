import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Animated, Platform } from "react-native";
import Header from "../components/Best/BestHeader";
import BestRecBtn from "../components/Best/BestRecBtn";
import BackButton from "../components/Best/BestBackButton";
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from '@react-navigation/stack';

const BestScreen = () => {
  const [data, setData] = useState([
    { id: 1, date: "2023년 11월 15일", title: "강아지 vs 고양이", participants: 12345 },
    { id: 2, date: "2023년 11월 16일", title: "가난한 사람은 아이를 낳으면 안 된다 vs 된다", participants: 1234 },
    { id: 3, date: "2023년 11월 17일", title: "강아지 vs 고양이", participants: 123 },
    { id: 4, date: "2023년 11월 18일", title: "강아지 vs 고양이", participants: 12 },
    { id: 5, date: "2023년 11월 24일", title: "입이 거친 게 싫다던 너 때문에 화가 나도 욕을 못 하고 너 기대라고 넓혀놓은 내 어깨는 이젠 지하철 속 장애물일 뿐이야", participants: 3 },
    // 다른 게시글 데이터들
  ]);

  // [추후 수정]
  // 1. (마지막에) 두 줄 이상 넘어갈 때 왼쪽 정렬 -> 가운데 정렬 (데이터 저장할 때 아예?)
  // 2. 참여자 수에 쉼표 (데이터 저장할 때 하면 되나?)
  // 3. 날짜 년 월 일 나누고 글자 빼서 숫자로만 관리
  // 4. 애니메이션 뮨제 수정 or 타협 
      // 문제 1. header height 줄어들게 했더니 글자 범위도 같이 줄어들어서 글자가 사라짐
      // 문제 2. 텍스트 크기가 안 줄어들음
      // 스크롤 시 header가 작아지면서 화살표 옆으로 가는 애니메이션을 원함
      // header height를 줄이지 말고 <-랑 Header를 감싸는 container를 둔 다음에 header 위치만 변경해도 되나?


  const scrollY = new Animated.Value(0);

  // 헤더의 높이 애니메이션
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200], // scrollY의 값이 이 안에서 변경될 시
    outputRange: [100, 20], // 헤더가 변함 최대 높이 -> 최소 높이로
    extrapolate: 'clamp', // 예외 발생 시 : 근사치로 알아서 (내가 이해한 바로는 이럼)
  });

  // 위로 이동하는 애니메이션
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  });

  // 투명도 변하는 애니메이션
    const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0], // 애니메이션 수정 후 투명도는 없애기
    extrapolate: 'clamp',
  });

  // 텍스트 사이즈 달라지는 애니메이션
  const headerTextSize = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [24, 18], // 이거 작동이 안 됨 ㅡㅡ;;
    extrapolate: 'clamp',
  });

  return (
    <LinearGradient
                    colors={[
                      'rgba(253, 200, 209, 0.2)',
                      'rgba(207, 186, 253, 0.2)',
                      'rgba(168, 241, 161, 0.2)',
                      'rgba(194, 244, 252, 0.2)',
                    ]}
                    start={{ x: 0.05, y: 0.1286 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={styles.gradientBackground}>
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.headerContainer,
            { height: headerHeight },
          ]}
        >
         <Animated.View
            style={[
              styles.header,
              { transform: [{ translateY: headerTranslateY }], opacity: headerOpacity },
            ]}
          >
            <Header
              headerText={"Best 토론 👑"}
              style={{ fontSize: headerTextSize }}
            />
          </Animated.View>
        </Animated.View>
        <ScrollView
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                      useNativeDriver: false,
                    })}
                    scrollEventThrottle={16}>
          {data.map((item) => (
            <BestRecBtn
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    participants={item.participants}/>
           ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: 'column',
  },
  headerContainer: {
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 5 : 10,
    height: '100%',
    justifyContent: 'center',
  },
});

export default BestScreen;
