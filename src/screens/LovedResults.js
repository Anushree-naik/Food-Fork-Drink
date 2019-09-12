import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import SavedItemsContext from '../context/SavedItemsContext';


const LovedResults = () => {

    const { data } = useContext(SavedItemsContext);

    return (
        <View>
            <Text>Saved results</Text>
            <FlatList
                data={data}
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