/*
  Andrew Mainella About
  Andrew Mainella
  28 November 2023
  Home.tsx
  The main home page
*/
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode, useEffect, useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { AzureIcon, FirebaseIcon, GitIcon, JavaIcon, PythonIcon, RacketIcon, ReactIcon, SwiftIcon } from '@components/Icons';
import Header from '@components/Header';
import NameComponent from '@components/NameComponent';
import { Colors } from '@types';

function getChildrenSize(width: number, height: number): number {
  if (width < height) {
    return  width * 0.2;
  }
  return height * 0.25;
}

function getBodySize(width: number, height: number): number {
  if (width < height) {
    return  width * 0.25;
  }
  return height * 0.35;
}

function BodyBlock({text, children}:{text: string, children: ReactNode}) {
  const { width, height } = useSelector((state: RootState) => state.dimentions);
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Pressable 
      style={{
        width: getBodySize(width, height),
        height: getBodySize(width, height),
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: getBodySize(width, height)/2,
        backgroundColor: 'black',
        transform: [{scale: isHover ? 1.05:1}],
        shadowRadius: isHover ? 10:0,
        shadowColor: 'white'
      }}
      onHoverIn={() => setIsHover(true)}
      onHoverOut={() => setIsHover(false)}
    >
      <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto'}}>
        {children}
      </View>
      <Text style={{marginTop: 5, marginLeft: 'auto', marginRight: 'auto', color: 'white', marginBottom: "auto"}}>{text}</Text>
    </Pressable>
  )
}

function BodyComponent({onLayoutHeight}:{onLayoutHeight: (item: number) => void}) {
  const { width, height } = useSelector((state: RootState) => state.dimentions);
  return (
    <View onLayout={(e) => onLayoutHeight(e.nativeEvent.layout.height)}>
      <View style={{height: 40, marginLeft: 20}}>
        <HelloComponet />
      </View>
      <Text style={{color: "white", fontSize: 25, marginLeft: 20, marginRight: 20}}>my name is Andrew Mainella, I am a student, curler, coder. I am a born and raised Manitoban. I am a student at the University of British Columbia with a passion for computer science. I hope that this website will show you what I have done!</Text>
      <View>
        <Text adjustsFontSizeToFit style={{color: 'white', fontSize: 50, marginHorizontal: 20}} numberOfLines={1}>What I am using</Text>
        <View style={{flexDirection: "row", width: width - 40, marginLeft: 20}}>
          <BodyBlock text='React'>
            <ReactIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='React Native'>
            <ReactIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='Azure'>
            <AzureIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
        </View>
        <Text adjustsFontSizeToFit style={{color: 'white', fontSize: 50, marginHorizontal: 20}} numberOfLines={1}>What I am learning</Text>
        <View style={{flexDirection: "row", width: width - 40, marginLeft: 20}}>
          <BodyBlock text='Java'>
            <JavaIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='Racket'>
            <RacketIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='Python'>
            <PythonIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
        </View>
        <Text adjustsFontSizeToFit style={{color: 'white', fontSize: 50, marginHorizontal: 20}} numberOfLines={1}>What I have used</Text>
        <View style={{flexDirection: "row", width: width - 40, marginLeft: 20, marginBottom: 10}}>
          <BodyBlock text='Firebase'>
            <FirebaseIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='Swift'>
            <SwiftIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
          <BodyBlock text='Git'>
            <GitIcon width={getChildrenSize(width, height)} height={getChildrenSize(width, height)}/>
          </BodyBlock>
        </View>
      </View>
      <View>
        <Text style={{color: "white", marginLeft: 5, marginBottom: 5}}>Copyright &#169; 2024 Andrew Mainella</Text>
      </View>
    </View>
  );
}

export default function Index() {
  const { height, width } = useSelector((state: RootState) => state.dimentions);
  const progress = useSharedValue(0);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  const insets = useSafeAreaInsets()

  const innerStyle = useAnimatedStyle(() => {
    return {
      top: ((width * 1.5) > progress.value) ? 0:-(progress.value - width * 1.5)
    }
  })

  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: ((width * 1.5) > progress.value) ? 0:(progress.value - width * 1.5 > 100) ? 1:1-progress.value/100,
      top: (((width * 1.5) > progress.value) ? 0:progress.value - width * 1.5)
    }
  })

  const scrollHandler = useAnimatedScrollHandler((event) => {
    progress.value = event.contentOffset.y
  });

  const gesture = Gesture.Pan().onUpdate((e) => {
    if (progress.value - e.translationY >= 0 && progress.value - e.translationY <= (width * 1.5) + bodyHeight) {
      progress.value -= e.translationY
    } else if (progress.value - e.translationY < 0) {
      progress.value = 0
    } else if (progress.value - e.translationY > (width * 1.5) + bodyHeight) {
      progress.value = (width * 1.5) + bodyHeight
    }
  })

  if (Platform.OS === 'ios') {
    return (
      <GestureDetector gesture={gesture}>
        <View
          style={{width, height, backgroundColor: Colors.primary}}
        >
          <Animated.View style={[{width: width, height: height, zIndex: 5, backgroundColor: Colors.primary}, innerStyle]}>
            <StatusBar style="auto" />
            <Animated.View style={[{zIndex: 12, width: width, position: 'absolute', marginTop: insets.top}, headerStyle]}>
              <Header />
            </Animated.View>
            <NameComponent progress={progress}/>
            <BodyComponent onLayoutHeight={setBodyHeight}/>
          </Animated.View>
        </View>
      </GestureDetector>
    )
  }

  return (
    <View style={{width, height, backgroundColor: Colors.primary}}>
      <Animated.ScrollView scrollEventThrottle={16} style={{width: width, height: height, zIndex: 6}} onScroll={scrollHandler} contentContainerStyle={{
        height: width * 1.5 + height + bodyHeight
      }} stickyHeaderIndices={[0]}>
        <Animated.View style={[{width: width, height: height, zIndex: 8, backgroundColor: Colors.primary, position: 'absolute'}, innerStyle]}>
          <StatusBar style="auto" />
          <Animated.View style={[{zIndex: 12, width: width, position: 'absolute'}, headerStyle]}>
            <Header />
          </Animated.View>
          <NameComponent progress={progress}/>
          <BodyComponent onLayoutHeight={setBodyHeight}/>
        </Animated.View>
      </Animated.ScrollView>
    </View>
  )
}

function HelloComponet() {
  const helloOpacity = useSharedValue(2);
  const bonjourOpacity = useSharedValue(0);

  useEffect(() => {
    helloOpacity.value =  withRepeat(withTiming(0, {duration: 2000, easing: Easing.bezier(0.46, 0.8, 0.47, 1.03)}), 0, true)
    bonjourOpacity.value = withRepeat(withTiming(2, {duration: 2000, easing: Easing.bezier(0.46, 0.8, 0.47, 1.03)}), 0, true)
  }, [])

  const helloStyle = useAnimatedStyle(() => ({
    opacity: (helloOpacity.value >= 1) ? helloOpacity.value - 1:0
  }))

  const bonjourStyle = useAnimatedStyle(() => ({
    opacity: (bonjourOpacity.value >= 1) ? bonjourOpacity.value - 1:0
  }))

  return (
    <View>
      <Animated.Text style={[{position: "absolute", left: 0, top: 0, fontSize: 30, color: "white"}, helloStyle]}>Hello,</Animated.Text>
      <Animated.Text style={[{position: "absolute", left: 0, top: 0, fontSize: 30, color: "white"}, bonjourStyle]}>Bonjour,</Animated.Text>
    </View>
  )
}