import React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
const {width,height} = Dimensions.get('screen');
const BottomContainer = ({...props}:any) => {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'transparent',
        paddingTop: 100,
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: new Animated.Value(0) } } }],
        { useNativeDriver: true },
      )}
      style={styles.scrollViewArea}>
      <Animated.View style={styles.block}>
        {props.children}
      </Animated.View>
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewArea:{
    paddingTop: 100
  },
  block: {
    backgroundColor: '#fff',
    width: width,
    height: height,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25  },
})

export default BottomContainer;