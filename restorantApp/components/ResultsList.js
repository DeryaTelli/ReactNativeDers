    import { StyleSheet, Text, View, FlatList } from 'react-native'
    import React from 'react'

    export default function ResultsList({title, results}) {
        console.log(results);
    return (
        <View>
        <Text>{title}</Text>
        <FlatList
        />
        <Text></Text>
        </View>
    )
    }

    const styles = StyleSheet.create({})