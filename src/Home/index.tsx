import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import React from 'react';
import { HomeRoutes } from '../components/Navigation';
import WorkoutSession from './WorkoutSession/WorkoutSession';
import { DRAWER_WIDTH } from './Drawer';
import { Home } from './Home';

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} 
        drawerStyle={{width: DRAWER_WIDTH}}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="WorkoutSession" component={WorkoutSession}/>
    </Drawer.Navigator>
)