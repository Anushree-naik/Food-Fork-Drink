import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StartScreen = (props) => {


    return (
        <>
            <ImageBackground source={require('../../assets/startPage.jpeg')} style={style.backgroundImage}>
                <TouchableOpacity
                    style={style.buttonStyle}
                    onPress={() => props.navigation.navigate('Search')}
                >
                    <MaterialCommunityIcons style={style.iconStyle} name="food-fork-drink" />
                    <Text style={style.textStyle}>Explore Your Restaurant Options!</Text>
                </TouchableOpacity>
            </ImageBackground>

        </>
    );
};

const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    buttonStyle: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: '#f44336',
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#e7e7e7',
        paddingBottom: 8,
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        height: 30,
        alignSelf: 'center',
        padding: 5,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});
export default StartScreen;
