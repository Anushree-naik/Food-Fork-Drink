import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
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
        <View>
            <Text>{add.name}</Text>
            <Text> Address: {add.location.display_address}</Text>
            <Text> Service Options: {trans.transactions}</Text>
            <Text> Contact Number: {contact.phone}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default AddressShow;
