import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Animated, Platform } from "react-native";
import Header from "../components/BestHeader";
import BestRecBtn from "../components/BestRecBtn";
import BackButton from "../components/BestBackButton";
import { LinearGradient } from "expo-linear-gradient";

const BestScreen = () => {
  const [data, setData] = useState([
    { id: 1, date: "2023년 11월 15일", title: "강아지 vs 고양이", participants: 12345 },
    { id: 2, date: "2023년 11월 16일", title: "가난한 사람은 아이를 낳으면 안 된다 vs 된다", participants: 1234 },
    { id: 3, date: "2023년 11월 17일", title: "강아지 vs 고양이", participants: 123 },
    { id: 4, date: "2023년 11월 18일", title: "강아지 vs 고양이", participants: 12 },
    { id: 5, date: "2023년 11월 24일", title: "입이 거친 게 싫다던 너 때문에 화가 나도 욕을 못 하고 너 기대라고 넓혀놓은 내 어깨는 이젠 지하철 속 장애물일 뿐이야", participants: 3 },
    // 다른 게시글 데이터들
  ]);

  // [수정]
  // 1. (마지막) 두 줄 이상 넘어갈 때 왼쪽 정렬 -> 가운데 정렬 (데이터 저장할 때 아예?)
  // 2. 참여자 수에 쉼표
  // 3. 날짜 년 월 일
  // 4. Rec 안에 색 다른 거 변경
  // 5. 흐려지게 이동 없애기 
  // 6. 크기 줄어들고 없어지지 않게 zindex 설정해 주기


  const scrollY = new Animated.Value(0);

  // 헤더의 높이 애니메이션
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200], // scrollY의 값이 이 안에서 변경될 시
    outputRange: [100, 20], // 헤더가 변함 최대 높이 -> 최소 높이로
    extrapolate: 'clamp', // 예외 발생 시 : 근사치로 알아서 (내가 이해한 바로는 이럼)
  });

  // 위로 이동
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -150],
    extrapolate: 'clamp',
  });

    const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 1], // 투명도 달라질 필요가 없어짐
    extrapolate: 'clamp',
  });

  const headerTextSize = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [24, 5],
    extrapolate: 'clamp',
  });

  return (
    <LinearGradient
                    colors={[
                      'rgba(253, 200, 209, 0.3)',
                      'rgba(207, 186, 253, 0.3)',
                      'rgba(168, 241, 161, 0.3)',
                      'rgba(194, 244, 252, 0.3)',
                    ]}
                    start={{ x: 0.05, y: 0.1286 }}
                    end={{ x: 0.5, y: 0.5 }}
                    style={styles.gradientBackground}>
      <SafeAreaView style={styles.container}>
        <BackButton />
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
    paddingTop: Platform.OS === 'ios' ? 30 : 10,
    height: '100%',
    justifyContent: 'center',
  },
});

export default BestScreen;
