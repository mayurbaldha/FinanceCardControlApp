import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorScheme from '../../constants/uiScheme';
import BalanceInfo from '../molecules/BalanceInfo';

const TopContainer = () => {
  return (
    <View style={styles.topArea}>
       <BalanceInfo/>
    </View>
  )
}

const styles = StyleSheet.create({
  topArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: 350,
    backgroundColor: ColorScheme.secondary,
  },
})

export default TopContainer;