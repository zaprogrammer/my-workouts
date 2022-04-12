import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CustomTextBox from '../components/CustomTextBox';
import { AuthNavigationProps } from '../components/Navigation';

const Login = ({navigation}: AuthNavigationProps<'Login'>) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.titleText}>Welcome to VATION!</Text>
            <Text style={styles.subtitleText}>Login</Text>
            <CustomTextBox
                placeholder={'Username'}
                returnKeyType={'next'}
                value={username}
                onChangeText={(username) => setUsername(username)}
                onSubmitEditing={() => console.log(username)}
            />
            <CustomTextBox
                customStyles={{marginTop: 20}}
                placeholder={'Password'}
                returnKeyType={'done'}
                isPassword={true}
                value={password}
                onChangeText={(pass) => setPassword(pass)}
                onSubmitEditing={() => console.log(password)}
            />
            <View style={{width: '100%', marginTop: 24}}>
                <Button title='Login' onPress={()=> navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Home'}]
                }))} />
            </View>
        </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    innerContainer: {
        // flex: 1,
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitleText: {
        fontSize: 20,
        marginVertical: 16,

    },
})
