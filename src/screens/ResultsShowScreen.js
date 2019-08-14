import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={style.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={style.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        alignSelf: 'center',
    },
    image: {
        padding: 15,
        height: 200,
        width: 200,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;
