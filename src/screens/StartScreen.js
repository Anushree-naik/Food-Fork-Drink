import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const StartScreen = (props) => {


    return (
        <View style={style.mainConatinerStyle}>
            <ImageBackground source={require('../../assets/startScreen.jpeg')} style={style.backgroundImage}>
                <TouchableOpacity
                    style={style.buttonStyle}
                    onPress={() => props.navigation.navigate('Search')}
                >
                    <MaterialCommunityIcons style={style.iconStyle} name="food-fork-drink" />
                    <Text style={style.textStyle}>Get Started!</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );
};

const style = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    buttonStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 100,
        backgroundColor: '#FFB6C1',
        height: 50,
        borderRadius: 3,
        marginHorizontal: 15,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#B0E0E6',
        paddingBottom: 8,
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        color: 'black',
        height: 30,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 30,
        marginBottom: 10,
        marginLeft: 35


    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
        padding: 10,
    }
});
export default StartScreen;
