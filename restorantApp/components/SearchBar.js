    import { StyleSheet, Text, View , 
        TextInput
    } from 'react-native'
    import React from 'react'
    import Feather from '@expo/vector-icons/Feather';

    export default function SearchBar() {
    return (
        <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" size={34} color="black" />
        <TextInput style={styles.inputStyle} placeholder='Search' autoCorrect={false}  autoCapitalize='none'/>
        </View>
    )
    }

    const styles = StyleSheet.create({
        backgroundStyle: {
            backgroundColor: 'lightgray',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            height: 50,
            borderRadius: 12,
        }, 
        iconStyle:{
            marginHorizontal:15, 
        },
        inputStyle: {
            flex:1,
            fontSize:18,
        }
    })