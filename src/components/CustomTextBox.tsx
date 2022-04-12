import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import {MaterialIcons as Icon} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { width } from "../helpers/constants";

interface Props {
    customStyles: any,
    placeholder: string,
    returnKeyType: any,
    value: any,
    onChangeText: any,
    onSubmitEditing: any,
    isPassword?: boolean
}

interface State {
    hidePassword: boolean
}

class CustomTextBox extends Component<Props, State> {

    static textColor = (opacity: number) => `rgba(0, 0, 0, ${opacity} )`

    static propTypes = {
        customStyles: PropTypes.any,
        placeholder: PropTypes.string,
        returnKeyType: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
        onChangeText: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        isPassword: PropTypes.bool
    }

    state = {
        hidePassword: true
    };

    render = () => {

        const { customStyles, placeholder, returnKeyType, value, onChangeText, onSubmitEditing, isPassword = false } = this.props;
        return (
            <View style={[styles.container, customStyles]}>
                <View style={styles.textBoxContainer}>
                    <TextInput
                        placeholderTextColor={CustomTextBox.textColor(0.3)}
                        style={styles.textBox}
                        value={value}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        secureTextEntry={isPassword ? this.state.hidePassword : false}
                        autoCompleteType={isPassword ? "password" : "name"}
                        autoCorrect={false}
                        onChangeText={onChangeText}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                    />
                    {isPassword && <TouchableOpacity activeOpacity={0.8} style={styles.touchableButton}
                        onPress={this.changePasswordVisibility}>
                        <Icon color={CustomTextBox.textColor(0.75)}
                            name={(this.state.hidePassword) ? "visibility" : "visibility-off"} size={25} />
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }

    private changePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
}

const styles = StyleSheet.create(
    {
        container: {
            width: width - 40,
            marginLeft: "0%",
        },
        textBoxContainer: {
            position: "relative",
            alignSelf: "stretch",
            justifyContent: "center",
            color: "black"
        },
        textBox: {
            fontSize: 14,
            alignSelf: "stretch",
            height: 42,
            paddingRight: 45,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: CustomTextBox.textColor(1),
            borderWidth: 1,
            borderBottomColor: CustomTextBox.textColor(1),
            borderLeftColor: "transparent",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
        },
        touchableButton: {
            position: "absolute",
            right: 4,
            width: 40,
            padding: 8,
        },
    });

export default CustomTextBox;
