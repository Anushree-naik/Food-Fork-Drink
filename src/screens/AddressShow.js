import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import yelp from '../api/yelp';

const AddressShow = ({ navigation }) => {
    const [add, setAdd] = useState(null);
    const [trans, setTrans] = useState(null);
    const [contact, setContact] = useState(null);
    const [cousine, setCousine] = useState(null);

    const id = navigation.getParam('id');

    const getAdd = async (id) => {
        const response = await yelp.get(`/${id}`);
        setAdd(response.data);
    }

    const getTrans = async (id) => {
        const response = await yelp.get(`/${id}`);
        setTrans(response.data);
    }

    const getContact = async (id) => {
        const response = await yelp.get(`/${id}`);
        setContact(response.data);
    }

    const getCousine = async (id) => {
        const response = await yelp.get(`/${id}`);
        setTrans(response.data);
    }

    useEffect(() => {
        getAdd(id);
    }, []);

    useEffect(() => {
        getTrans(id);
    }, []);

    useEffect(() => {
        getContact(id);
    }, []);

    useEffect(() => {
        getCousine(id);
    }, []);


    if (!add) {
        return null;
    }

    if (!trans) {
        return null;
    }

    if (!contact) {
        return null;
    }



    return (
        <View style={style.container}>
            <ImageBackground source={require('../../assets/yelloBackground.jpeg')} style={style.backgroundImage}>
                <Text style={style.nameStyle}> {add.name}</Text>

                <Text style={style.textStyle}> Address: </Text>
                <Text> {add.location.display_address}</Text>
                <Text style={style.textStyle}> Service Options: </Text>
                <Text> {trans.transactions}</Text>
                <Text style={style.textStyle}> Contact Number: </Text>
                <Text> {contact.phone}</Text>
            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'flex-start'
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },

});

export default AddressShow;
