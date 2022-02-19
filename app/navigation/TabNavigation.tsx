import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CreditScreen from "../components/pages/CreditScreen";
import DebitCardScreen from "../components/pages/DebitCardScreen";
import Home from "../components/pages/Home";
import Payments from "../components/pages/Payments";
import ProfileScreen from "../components/pages/ProfileScreen";
import ColorScheme from "../constants/uiScheme";

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Debit Card'
      screenOptions={{
        tabBarActiveTintColor: ColorScheme.primary,
        tabBarInactiveTintColor: ColorScheme.greyShade,
        tabBarActiveBackgroundColor: ColorScheme.white,
        tabBarInactiveBackgroundColor: ColorScheme.white,
        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon name={'home'} color={color} size={size} style={{ alignContent: 'center', }} />
        ),
        unmountOnBlur: true,
      }} />
      <Tab.Screen name="Debit Card" component={DebitCardScreen} options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon name={'credit-card-alt'} color={color} size={size} style={{ alignContent: 'center', }} />,
      }} />
      <Tab.Screen name="Payments" component={Payments} options={{
        tabBarIcon: ({ color, size }) => <MaterialIcons name={'payments'} color={color} size={size} style={{ alignContent: 'center', }} />,
      }} />
      <Tab.Screen name="Credit" component={CreditScreen} options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon name={'arrow-circle-up'} color={color} size={size} style={{ alignContent: 'center', }} />,
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon name={'user'} color={color} size={size} style={{ alignContent: 'center', }} />,
      }} />
    </Tab.Navigator>
  )

}