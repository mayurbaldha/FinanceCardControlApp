import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";

const Payments = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.bannerText}>Payments</Text>
        </View>
    )
}
export default Payments;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1, backgroundColor: ColorScheme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText: {
        fontFamily: 'AvenirNext-Medium',
        fontSize: 25,
        lineHeight: 30,
    }

});