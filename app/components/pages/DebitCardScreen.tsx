import React from "react";
import { StyleSheet, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";
import OverlappingContainers from "../templates/OverlappingContainers";

const DebitCard = ()=>{
    return(
        <View style={styles.container}>
            <OverlappingContainers/>
        </View>
    )
}
export default DebitCard;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1, backgroundColor: ColorScheme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
