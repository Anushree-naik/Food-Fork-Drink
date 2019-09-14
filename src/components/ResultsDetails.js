import React, { useContext } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from '../context/SavedItemsContext';


const ResultsDetails = ({ result, navigation, results }) => {

    const { saveRestaurants } = useContext(Context);

    this.state = {
        pressed: false
    };
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: result.image_url }} />
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

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

