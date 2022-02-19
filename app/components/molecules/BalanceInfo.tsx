import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";


const BalanceInfo = () => {
    return (
        <View style={styles.balanceArea}>
            <Text style={styles.title}>Debit Card</Text>
            <Text style={styles.balanceTitle}>Available Balance</Text>
            <View style={styles.balanceInfo}>
                <View style={styles.currencyArea}>
                    <Text style={styles.currency}>{'S$'}</Text>
                </View>
                <View>
                    <Text style={styles.balance}>{'3,000'}</Text>
                </View>
            </View>
        </View>
    )
};
export default BalanceInfo;

const styles = StyleSheet.create({
    balanceArea: {
        marginHorizontal: 24,
        marginTop: 24,
        paddingBottom: 24,
    },
    title: {
        color: ColorScheme.white,
        fontSize: 24,
        lineHeight: 32,
        fontFamily: 'AvenirNext-Bold',
        textAlign: 'left',
        marginBottom:24,
    },
    balanceTitle: {
        color: ColorScheme.white,
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'AvenirNext-Medium',
        textAlign: 'left',
        marginBottom:10,
    },
    balanceInfo: {
       flexDirection: 'row',
       height:33,
    },
    currencyArea: {
        backgroundColor: ColorScheme.primary,
        paddingHorizontal:12,
        borderRadius:4,
        marginVertical:5,
    },
    balance:{
        color: '#FFF',
        fontSize: 24,
        lineHeight: 36,
        marginLeft:10,
        fontFamily: 'AvenirNext-Bold',
        textAlign: 'left',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },
    currency:{
        color: '#FFF',
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'AvenirNext-Bold',
        textAlign: 'left',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    }
})
