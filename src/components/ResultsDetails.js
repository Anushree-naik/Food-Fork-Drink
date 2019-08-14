import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

const ResultsDetails = ({ result, navigation, results }) => {



    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: result.image_url }} />
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            <FlatList
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Address', { id: item.id })}>
                            <Text>Address Information</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Address', { id: result.id })}>
                <Text>Address Information</Text>
            </TouchableOpacity>

        </View>
    );
};


const style = StyleSheet.create({
    container: {
        marginLeft: 15,

    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    }

});

export default withNavigation(ResultsDetails);
