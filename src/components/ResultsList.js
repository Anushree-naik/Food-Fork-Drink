import React, { useReducer } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';
import jsonServer from '../api/jsonServer';

const ResultsList = ({ title, results, navigation }) => {

    const getRestaurants = dispatch => {
        return async () => {
            const response = await jsonServer.get('/restaurants');
            //response.data === [{}, {}, {}]

            dispatch({ type: 'getRestaurants', payload: response.data })
        }
    }

    if (!results.length) {
        return null;
    }


    return (
        <View style={style.contianer}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    );
};

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,

    },
    contianer: {
        marginBottom: 10,
    },
    addStyle: {
        marginLeft: 15,
    }
});

export default withNavigation(ResultsList);
