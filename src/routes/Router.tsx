import React, { ComponentProps } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Teams from '../screens/Teams';
import Leagues from '../screens/Leagues';
import Classifications from '../screens/Classifications';
import Players from '../screens/Players';
import Trophies from '../screens/Trophies';

import CustomDrawer from '../components/CustomDrawer';
import CustomHeader from '../components/CustomHeader';
import { DrawerProps } from '@react-navigation/drawer/lib/typescript/src/types';

export type RootStackParamList = {
    Drawer: DrawerProps,
}

export type RootDrawerParamList = {
    Home: ComponentProps<typeof Home>,
    Teams: ComponentProps<typeof Teams>,
    Leagues: ComponentProps<typeof Leagues>,
    Classifications: ComponentProps<typeof Classifications>,
    Players: ComponentProps<typeof Players>,
    Trophies: ComponentProps<typeof Trophies>,
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerTintColor: '#fff',
                drawerActiveTintColor: '#6C5ECF',
                drawerInactiveTintColor: '#808191',
                drawerLabelStyle: {
                    fontSize: 14
                },
                headerStyle: {
                    backgroundColor: '#181829'
                },
                drawerStyle: {
                    backgroundColor: '#252836'
                }
            }}>
            <Drawer.Screen name="Home" component={Home} options={{
                header: props => <CustomHeader {...props} name="Discover" />
            }} />
            <Drawer.Screen name="Teams" component={Teams} options={{
                header: props => <CustomHeader {...props} name="Teams" />
            }} />
            <Drawer.Screen name="Leagues" component={Leagues} options={{
                header: props => <CustomHeader {...props} name="Leagues" />
            }} />
            <Drawer.Screen name="Classifications" component={Classifications} options={{
                header: props => <CustomHeader {...props} name="Classifications" />
            }} />
            <Drawer.Screen name="Players" component={Players} options={{
                header: props => <CustomHeader {...props} name="Players" />
            }} />
            <Drawer.Screen name="Trophies" component={Trophies} options={{
                header: props => <CustomHeader {...props} name="Trophies" />
            }} />
        </Drawer.Navigator>
    );
}

export const Router = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}