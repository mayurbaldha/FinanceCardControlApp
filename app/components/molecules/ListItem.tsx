import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorScheme from '../../constants/uiScheme';
interface IListItemProp {
    isActionable: boolean;
    isDisabled: boolean;
    iconName: string;
    title: string; 
    subTitle: string;
    openModal: () => void;
}
const ListItem = ({ isActionable,isDisabled, iconName, title, subTitle,openModal }:IListItemProp) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !isEnabled)
       if(isEnabled === false){
            openModal();
       }
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconArea}>
                <View style={styles.iconBg}>
                    <MaterialCommunityIcon name={iconName} size={20} color={ColorScheme.info} />
                </View>
            </View>
            <View style={styles.itemName}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
                {isActionable && (
                    <View style={{ flex: 1, }}>
                        <Switch trackColor={{ false: "#EEEEEE", true: ColorScheme.primary }}
                            thumbColor={isEnabled ? "#FFF" : "#FFF"}
                            ios_backgroundColor="#EEEEEE"
                            onValueChange={toggleSwitch}
                            value={isEnabled} 
                            disabled={isDisabled}/>
                    </View>)}
            </View>

        </View>
    )
}
export default ListItem;
const styles = StyleSheet.create({
    iconBg: {
        borderRadius: 50,
        backgroundColor: '#325baf', 
        padding: 8,
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    iconArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        marginLeft: 10,
        flex: 6,
        flexDirection: 'row',
    },
    title: {
        fontSize: 14,
        lineHeight: 12,
        color: ColorScheme.secondaryVariant,
        marginLeft: 4,
        paddingVertical: 4,
        fontFamily: 'AvenirNext-Medium',
        textAlign: 'left',
    },
    subTitle: {
        fontSize: 13,
        lineHeight: 12,
        color: '#222222',
        marginLeft: 4,
        paddingVertical: 3,
        fontFamily: 'AvenirNext-Medium',
        textAlign: 'left',
        opacity: 0.4,
    }
})