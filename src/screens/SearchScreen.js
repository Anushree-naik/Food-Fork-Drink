import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price = $ || $$ || $$$
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Reasonabe"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Little Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$$')}
                    title="Very Expensive"
                />
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
});

export default SearchScreen;