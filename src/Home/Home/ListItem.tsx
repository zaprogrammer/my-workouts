import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Workout } from './Home';

interface ListItemProps {
    workout: Workout,
};

const ListItem = ({workout}: ListItemProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={[styles.listItem, workout.status === 'COMPLETED' ? 
            styles.listItemCompleted : styles.listItemBg]} 
            onPress={()=> navigation.navigate('WorkoutSession', {sessionId: workout.id})}>
            <View style={styles.container}>
                <Image style={styles.image} source={require(`../../../assets/bench-press.png`)} />
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.categoryTitle}>{workout.name}</Text>
                        <Text>{workout.duration}</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.status}>{workout.status}</Text>
                        <Text>{`${workout.type}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 2,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3 )',
        borderRadius: 8,
    },
    listItemBg: {
        backgroundColor: 'white',
    },
    listItemCompleted: {
        backgroundColor: '#D3D3D3',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        width: 60,
        height: 60
    },
    content: 
    {
        flex: 4,
        marginLeft: 20
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryTitle: {
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemText: {
        textAlign: 'center'
    },
    status: {
        textAlign: 'left',
    }
})
