import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import ModalScreen from "../components/pages/ModalScreen";
import ColorScheme from "../constants/uiScheme";
import { TabNavigation } from "./TabNavigation";

const RootStack = createNativeStackNavigator();
export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Group screenOptions={{
                    headerShown: false,
                }}>
                    <RootStack.Screen name="TabNavigation" component={TabNavigation} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal', }}>
                    <RootStack.Screen name="MyModal" component={ModalScreen} options={{
                        headerStyle: {
                            backgroundColor: ColorScheme.secondary, elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerTintColor: ColorScheme.white,
                        headerTitle: () => (<Text></Text>),
                    }} />
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}