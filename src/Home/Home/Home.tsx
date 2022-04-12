import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import { appStyles } from '../../common/styles';
import { HomeNavigationProps } from '../../components/Navigation';
import { workouts } from '../__mock__/workouts';
import ListItem from './ListItem';

export interface Workout {
    id: number,
    name: string,
    duration: string, 
    type: 'Upper body' | 'Lower body', 
    status: 'COMPLETED' | 'UNCOMPLETED',
    iconUrl: string,
}

const Home = ({ navigation }: HomeNavigationProps<'Home'>) => {

    const [workoutsData, setWorkoutsData] = useState<Workout[]>();

    useEffect(() => {
        setWorkoutsData(workouts);

        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                shadowOpacity: 0
            },
            headerTintColor: 'rgba(0, 0, 0, 0.88)',
            headerTitle: 'Home'
        });

        return () => {
            setWorkoutsData([]);
        }
    }, [workoutsData]);

    return (
        <SafeAreaView style={appStyles.safeArea}>
            <View style={styles.screen}>
                <FlatList
                    numColumns={1}
                    style={styles.gridStyle}
                    contentContainerStyle={{paddingVertical: 30}}
                    keyExtractor={(item, index) => item.id.toString()}
                    data={workoutsData}
                    renderItem={
                        ({item}: {item: Workout, index: number}) => (
                            <ListItem workout={item}/>
                        )
                    }/>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        margin: 10
    },
    gridStyle: {
        flexDirection: 'column',
        alignContent: 'center',
    },
});
