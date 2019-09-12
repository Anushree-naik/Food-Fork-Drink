import React, { useContext } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import SavedItemsContext from '../context/SavedItemsContext';


const ResultsDetails = ({ result, navigation, results }) => {

    const { saveRestaurants } = useContext(SavedItemsContext);

    this.state = {
        pressed: false
    };
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: result.image_url }} />
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            {/*<FlatList
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Address', { id: item.id })}>
                            <Text style={style.addStyle}>Address Information</Text>
                        </TouchableOpacity>
                    )
                }}
            />*/}
            <TouchableOpacity onPress={() => navigation.navigate('Address', { id: result.id })}>
                <Text style={style.addStyle}>Contact Information</Text>
            </TouchableOpacity>

            {/*This is the icon which would be used to save the restaurants on JSON server*/}
            <TouchableOpacity
                onPress={() => { Alert.alert('Restaurant saved in Saved Items'); saveRestaurants() }}>
                <EvilIcons name="heart" style={style.iconStyle} />
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
    },
    addStyle: {
        fontWeight: 'bold',
    },

    iconStyle: {
        fontSize: 35,
    }
});

export default withNavigation(ResultsDetails);

