import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ReferenceScreen from '../screens/ReferenceScreen';
import KalkulatorScreen from "../screens/KalkulatorScreen";
import Tadacal1Screen from "../screens/Kalkulator/Tadacal1Screen";
import Tadacal2Screen from "../screens/Kalkulator/Tadacal2Screen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Tada1: Tadacal1Screen,
        Tada2: Tadacal2Screen
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const KalkulatorStack = createStackNavigator({
    Kalkulator: KalkulatorScreen,
    Tada1: Tadacal1Screen,
    Tada2: Tadacal2Screen
});
KalkulatorStack.navigationOptions = {
    tabBarLabel: 'Kalkulator',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'}/>
    )
}

const ReferenceStack = createStackNavigator(
    {
        Reference: ReferenceScreen,
    },
    config
);

ReferenceStack.navigationOptions = {
    tabBarLabel: 'Referensi',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}/>
    ),
};

ReferenceStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    ReferenceStack,
    KalkulatorStack
});

tabNavigator.path = '';

export default tabNavigator;
