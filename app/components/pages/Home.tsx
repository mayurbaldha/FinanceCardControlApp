import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bannerText}>Home</Text>
        </View>
    )
}
export default Home;
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