import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ColorScheme from "../../constants/uiScheme";
const { width, height } = Dimensions.get('window');
const ModalScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <Text style={styles.topText}>Spending Limit</Text>
            </View>
            <View style={[{ paddingTop: 100 }]}>
                <ScrollView style={[
                    styles.bottomArea,
                    {
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }
                ]}>
                    <Text style={styles.bottomtitleText}>
                        Set Weekly debit card spending limit
                    </Text>
                    <View style={styles.bottomInputTextView}>
                        <View style={styles.currencyArea}>
                            <Text style={styles.currency}>{'S$'}</Text>
                        </View>
                        <TextInput value="5000" style={styles.textInputStyle} />
                    </View>

                    <View>
                        <Text style={styles.bottomSubText}>
                            Here weekly means the last 7 days - not the calendar week
                        </Text>
                    </View>
                    
                    <View style={styles.bottomBtns}>
                        <Text style={styles.bottombtnText}>{'5000'}</Text>
                        <Text style={styles.bottombtnText}>{'10000'}</Text>
                        <Text style={styles.bottombtnText}>{'20000'}</Text>
                    </View>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>Save
                        </Text>
                    </View>
                </ScrollView>
                
            </View>

        </View>
    )
}
export default ModalScreen;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1, backgroundColor: ColorScheme.white,
    },
    topArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: 150,
        backgroundColor: ColorScheme.secondary,
    },
    topText: {
        fontSize: 24,
        color: ColorScheme.white,
        lineHeight: 32,
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 4,
        fontFamily: 'AvenirNext-Bold',
    },
    bottomArea: {
        backgroundColor: ColorScheme.white,
        width: width,
        height: height,
        paddingHorizontal: 24,
        flexDirection:'column',
    },
    bottomtitleText: {
        fontFamily: 'AvenirNext-Medium',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'left',
        color: ColorScheme.black,
        marginBottom: 24,
        marginTop: 24,
    },

    bottomSubText: {
        fontFamily: 'AvenirNext-Regular',
        fontSize: 13,
        lineHeight: 18,
        textAlign: 'left',
        color: ColorScheme.greyShade5,
    },
    bottomBtns: {
        flexDirection: 'row',
        flex: 1,
    },
    bottombtnText: {
        flex: 1,
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: ColorScheme.primary,
        opacity: 0.3,
        fontFamily: 'AvenirNext-DemiBold',
        color: ColorScheme.primary,
        margin: 12,
        fontSize: 12,
        lineHeight: 16,
        borderRadius: 5,
        height: 56,
    },
    textInputStyle: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 16,
        textAlign: 'left',
        // marginVertical:10,
        flex: 7,
    },
    bottomInputTextView: {
        flexDirection: 'row',
        // flex:1,
        borderBottomColor: ColorScheme.greyShade3,
        borderBottomWidth: 1,
    },
    currencyArea: {
        backgroundColor: ColorScheme.primary,
        // justifyContent:'center',
        //  paddingHorizontal:12,
        borderRadius: 4,
        marginVertical: 20,
        marginRight: 20,
        flex: 1,
    },
    currency: {
        color: ColorScheme.white,
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'AvenirNext-Bold',
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    bottomButtonView: {
        marginHorizontal: 57,
        borderRadius: 50,
        padding: 12,
        backgroundColor: ColorScheme.primary,
        // height: 56,
    },
    bottomButtonText: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 16,
        textAlign: 'center',
        color: ColorScheme.white,
    },
})