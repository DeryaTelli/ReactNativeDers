    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'

    export default function HomeworkScreen() {
    return (
        <View style={styles.main}>
            <View
            style={styles.redCon}
            />
            <View
                style={styles.blueCon}
            />
            <View
            style={styles.greenCon}
            />
            <View
            style={styles.yellowCon}
            />

        </View>
    )
    }

    const styles = StyleSheet.create({
        main:{
            width:'100%',
            height:'100%',
        },
        redCon:{
            width:100,
            height:150,
            margin:10,
            backgroundColor:'red',

        },
        blueCon:{
            width:100,
            height:150,
            margin:10,
            backgroundColor:'blue',
            position: 'absolute',
            right:0,
            top:0

        },
        yellowCon:{
            width:100,
            height:150,
            margin:10,
            backgroundColor:'yellow',
            position: 'absolute',
            right:0 ,
            bottom:0
        },
        greenCon:{
            width:100,
            height:150,
            margin:10,
            backgroundColor:'green',
            position:'absolute',
            bottom:0
            
        },
        
    })