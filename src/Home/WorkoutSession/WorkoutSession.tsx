import React, { useEffect, useState } from 'react';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons as Icon} from '@expo/vector-icons';
import { appStyles } from '../../common/styles';
import { HomeNavigationProps } from '../../components/Navigation';
import { width } from '../../helpers/constants';
import { sessions } from '../__mock__/sessions';
import Card, { ITEM_SIZE } from './Card';

export interface Session {
    id: number,
    workoutId: number,
    name: string,
    pictureUrl: string,
    repetitions: number,
    duration: string,
    weights: number,
    status: string | 'current' | 'done' | null,
};

const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2 - 10;

const WorkoutSession = ({ route, navigation }: HomeNavigationProps<'WorkoutSession'>) => {
    
    let sessionId = 0;
    const routerParams = route.params ?? [];
    
    if (routerParams['sessionId'] !== undefined)
        sessionId = routerParams['sessionId'];

    const [sessionsData, setSessionsData] = useState<Session[]>([]);

    useEffect(() => {
        setSessionsData(sessions);

        navigation.setOptions({
            headerShown: true,
            headerLeft: () => (
                <TouchableOpacity style={styles.headerLeftIcon} onPress={() => navigation.goBack()}>
                    <Icon name={'arrow-back'} size={24}></Icon>
                </TouchableOpacity>
            ),
            headerStyle: {
                shadowOpacity: 0
            },
            headerTintColor: 'rgba(0, 0, 0, 0.88)',
            headerTitle: 'Workout session',
        });

        return () => {
            setSessionsData([]);
        }
    }, [sessionsData]);

    const sessionsArr = sessionsData?.filter(session => session.workoutId === sessionId);

    return (
        <SafeAreaView style={appStyles.safeArea}>
            <View style={styles.screen}>
                {sessionsArr.length === 0 && <Text>No sessions!</Text>}
                {sessionsArr.length > 0 && 
                    <FlatList
                        horizontal
                        bounces={false}
                        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                        renderToHardwareTextureAndroid
                        contentContainerStyle={{alignItems: 'center', paddingHorizontal: EMPTY_ITEM_SIZE,}}
                        snapToInterval={ITEM_SIZE}
                        snapToAlignment='start'
                        scrollEventThrottle={16}
                        keyExtractor={(item) => item.id.toString()}
                        data={sessionsArr}
                        renderItem={
                            ({item}: {item: Session, index: number}) => (
                                <Card session={item}/>
                            )
                        }/>
                    }
            </View>
        </SafeAreaView>
    )
}

export default WorkoutSession;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10
    },
    headerLeftIcon: {
        marginStart: 10,
    },
})
