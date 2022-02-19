import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";

const CreditScreen = ()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.bannerText}>CreditScreen</Text>
        </View>
    )
}
export default CreditScreen;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1, backgroundColor: ColorScheme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText:{
        fontFamily: 'AvenirNext-Medium',
        fontSize: 25,
        lineHeight: 30,
    }

});