    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


    export default function SearchScreen() {
        const [searchApi, results] = useResults(); //  aradigimiz sonuclari ekranda gostermek icin kullandik 
        console.log(results);

        const filterResultByPrice = (price) => {
            return results.filter(result => {
                return result.price === price;
            });
        }
    return (
        <View>
        <SearchBar/>
        <ResultsList title="Cheap Restorants" results={filterResultByPrice('₺')}/>
        <ResultsList title="Suitable Restorants" results={filterResultByPrice('₺₺')}/>
                <ResultsList title="Expensive Restorants" results={filterResultByPrice('₺₺₺')}/>

        </View>
    )
    }

    const styles = StyleSheet.create({})