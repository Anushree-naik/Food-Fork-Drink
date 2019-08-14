import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={style.backgroundStyle}>
            <AntDesign name="search1" style={style.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={style.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#CCCCCC',
        height: 50,
        borderRadius: 4,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 20,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
});

export default SearchBar;
