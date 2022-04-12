import React from 'react';
import { Alert, Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width } from '../../helpers/constants';
import { Session } from './WorkoutSession';

export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

interface CardProps {
    session: Session,
};

const Card = ({session}: CardProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('Show my saved progress')} style={styles.listItem}>
                <Image style={styles.posterImage} source={require(`../../../assets/workout.jpg`)}/>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.categoryTitle}>{session.name}</Text>
                        <Text>{session.duration}</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.status}>{session.status}</Text>
                        <Text>{`${session.repetitions} reps.`}</Text>
                    </View>
                </View>
                {session.status === 'done' && <View style={styles.doneOpacityView}/>}
            </TouchableOpacity>
            {/* {!session.status && <Button title={'Start'} onPress={() => true}/>}
            {session.status === 'current' && <Button title={'Finish'} onPress={() => true}/>} */}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        width: ITEM_SIZE,
        height: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginHorizontal: 10,
        backgroundColor: 'white',
    },
    gridStyle: {
        flexDirection: 'column',
    },
    listItem: {
        flex: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    doneOpacityView: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.5,
        flex: 1,
        height: '100%',
        width: ITEM_SIZE,
        zIndex: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    categoryTitle: {
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    itemText: {
        textAlign: 'center'
    },
    status: {
        flex: 1,
        textAlign: 'left',
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});
