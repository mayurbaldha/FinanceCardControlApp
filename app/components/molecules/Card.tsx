import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import ColorScheme from '../../constants/uiScheme';

const Card = () => {
    const [isHidden, setIsHidden] = React.useState<boolean>(false);
    return (
        <>
            <View style={styles.block}>
                <View style={styles.hideView}>
                    <Pressable style={styles.innerHideView} onPress={()=>setIsHidden(!isHidden)}>
                        <FeatherIcon name={isHidden ? 'eye':'eye-off'} color={ColorScheme.primary} size={16} />
                        <Text style={styles.hideText}>{isHidden ? 'Show' :'Hide' } card Number</Text>
                    </Pressable>
                </View>
                <View style={styles.cardArea}>
                    <View style={styles.logoArea}></View>
                    <Text style={styles.username}>Mark Henry</Text>
                    <View style={styles.cardNumbers}>
                        <Text style={styles.cardNumberBlock1}>{isHidden ? '****' :5647}</Text>
                        <Text style={styles.cardNumberBlock2}>{isHidden ? '****' :3411}</Text>
                        <Text style={styles.cardNumberBlock3}>{isHidden ? '****' :2413}</Text>
                        <Text style={styles.cardNumberBlock4}>{isHidden ? '****' :2020}</Text>
                    </View>
                    <View style={styles.validityArea}>
                        <View style={styles.validityDate}>
                            <Text style={styles.validityDateText}>Thru: 11/22</Text>
                        </View>
                        <View>
                            <Text style={styles.validityCVVText}>CVV: 456</Text>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}
export default Card;
const styles = StyleSheet.create({

    block: {
        width: 350,
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        zIndex: 5,
        position: 'relative', top: -80, elevation: 100,
    },
    cardArea: {
        paddingHorizontal: 10,
        backgroundColor: ColorScheme.primary,
        height: '100%',
        borderRadius: 10,
        marginTop: -10,
        paddingLeft: 24,

    },
    innerHideView: {
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 14,
        flexDirection: 'row',
    },
    hideView: {
        backgroundColor: ColorScheme.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '58%',
    },
    hideText: {
        color: ColorScheme.primary,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 12,
        textAlign: 'left',
        lineHeight: 16,
        marginLeft: 6,

    },
    logoArea: {
        height: 72,
    },
    username: {
        color: ColorScheme.white,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: 0.53,
        textAlign: 'left',
    },
    cardNumbers: {        
        flexDirection:'row',
        marginTop:24,
    },
    cardNumberBlock1: {
        lineHeight: 19,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        letterSpacing: 3.46,
        textAlign: 'left',
        color: ColorScheme.white,
    },
    cardNumberBlock2: {
        marginLeft: 24,
        lineHeight: 19,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        letterSpacing: 3.46,
        textAlign: 'left',
        color: ColorScheme.white,
    },
    cardNumberBlock3: {
        marginLeft: 24,
        lineHeight: 19,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        letterSpacing: 3.46,
        textAlign: 'left',
        color: ColorScheme.white,
    },
    cardNumberBlock4: {
        marginLeft: 24,
        lineHeight: 19,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        letterSpacing: 3.46,
        textAlign: 'left',
        color: ColorScheme.white,
    },
    validityArea: {
        flexDirection: 'row',
        marginTop: 15,
    },
    validityDate: {

    },
    validityDateText: {
        lineHeight: 18,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 13,
        letterSpacing: 1.56,
        textAlign: 'left',
        color: ColorScheme.white,
        marginRight:32,
    },
    validityCVVText: {
        lineHeight: 18,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 13,
        letterSpacing: 1.56,
        textAlign: 'left',
        color: ColorScheme.white,
    },
})