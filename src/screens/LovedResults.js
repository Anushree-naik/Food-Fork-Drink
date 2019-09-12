import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context } from '../context/SavedItemsContext';


const LovedResults = () => {

    const { state } = useContext(Context);

    return (
        <View>
            <Text>Saved results</Text>
            <FlatList
                data={state}
                keyExtractor={(resultList) => resultList.title}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
};

const style = StyleSheet.create({});

export default withNavigation(LovedResults);