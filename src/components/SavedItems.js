import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const SavedItems = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity
                style={style.backgroundStyle}
                onPress={() => navigation.navigate('Loved')}
            >
                <Text style={style.textStyle}>Saved items</Text>

            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({

    backgroundStyle: {
        marginTop: 5,
        backgroundColor: '#dc143c',
        height: 50,
        borderRadius: 4,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },

    textStyle: {
        fontSize: 18,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default withNavigation(SavedItems);
