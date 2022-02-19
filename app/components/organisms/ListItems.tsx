import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from '../molecules/ListItem';

const ListItems = () => {
  const navigation = useNavigation();
  const openModal = () => {
    navigation.navigate('MyModal');
  }
  return (
    <View style={styles.container}>
      <ListItem isActionable={false} isDisabled={false} iconName={'tray-arrow-up'} title={'Top-up Account'} subTitle={'Deposit money to your account to use with card'} openModal={openModal} />
      <ListItem isActionable={true} isDisabled={false} iconName={'gauge-empty'} title={'Weekly spending limit'} subTitle={'You haven’t set any spending limit on card'} openModal={openModal} />
      <ListItem isActionable={true} isDisabled={true} iconName={'snowflake-variant'} title={'Freeze card'} subTitle={'Your debit card is currently active'} openModal={openModal} />
      <ListItem isActionable={false} isDisabled={false} iconName={'credit-card-plus'} title={'Get A new card'} subTitle={'This deactivates your current debit card'} openModal={openModal} />
      <ListItem isActionable={false} isDisabled={false} iconName={'block-helper'} title={'Deactivated Cards'} subTitle={'Your previously deactivated Cards'} openModal={openModal} />
    </View>
  )
}
export default ListItems;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 48,
  },
})