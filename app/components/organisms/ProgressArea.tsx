import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import ColorScheme from '../../constants/uiScheme';

const ProgressArea = () => {
    const barWidth = Dimensions.get('screen').width - 96;
    return(
        <>
        <View style={styles.container}>
            <View>
                <Text style={styles.progressText}>Debit card spending limit</Text>
            </View>
            <View style={styles.progressValue}>
            <Text style={styles.progressedText}>$345 </Text>
            <Text style={styles.progressPendingText}>/ $5000</Text>
            </View>
        </View>
        <View style={styles.progressContainer}>
      
        <ProgressBarAnimated
            width={barWidth}
            value={34}
            barEasing={'quad'}
            backgroundColor={ColorScheme.primary}
            backgroundColorOnComplete="#148cF0"
            underlyingColor="red"
          />
        </View>
        </>
    )
}
export default ProgressArea;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 48,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  progressContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 48,
    paddingVertical:10,
  },
  progressText: {
    fontSize:13,
    textAlign:'left',
    fontFamily:'AvenirNext-Medium',
    lineHeight:18,
    color:'#222222'
  },
  progressedText: {
    color:ColorScheme.primary
  },
    progressPendingText: {
        color:ColorScheme.greyShade
    },
    progressValue: {
        flexDirection:'row',
    }
})