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
        marginVertical: 14,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },

    textStyle: {
        flex: 1,
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 140,
    }
});

export default withNavigation(SavedItems);
