import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context } from '../context/SavedItemsContext';
import { MaterialIcons } from '@expo/vector-icons';


const LovedResults = () => {

    const { state, deleteRestaurants, getRestaurants } = useContext(Context);

    //    useEffect(() => {
    //        getRestaurants();
    //    }, [1]);

    return (
        <View>

            <FlatList
                data={state}
                keyExtractor={(resultList) => resultList.title}
                renderItem={({ item }) => {
                    return (
                        <View style={style.row}>
                            <Text style={style.title}>{item.title}- {item.id}</Text>
                            <TouchableOpacity
                                onPress={() => deleteRestaurants(item.id)}
                            >
                                < MaterialIcons style={style.icon} name="delete" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10

    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default withNavigation(LovedResults);