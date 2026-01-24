    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'

    export default function DesignScreen() {
    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Layout</Text>
            {/* <View
            style={{width:50, height:50, backgroundColor:'pink', }}
            />
            <View
            style={{width:100, height:100, backgroundColor:'red', }}
            />
            <View
            style={{width:150, height:150, backgroundColor:'purple', }}
            /> */}
        </View>
    )
    }

    const styles = StyleSheet.create({
        mainView:{
            borderWidth:3,
            borderColor:'pink',
            margin:20,
            borderRadius:10,
        },
        mainText:{
            borderWidth:1,
            borderColor:'red',
            margin:30, // x ve y ekseninda  disa dogru bosluk vericek 
            //marginHorizontal:20, // sadece x ekseninde bosluk vericek
            //marginVertical:20, // sadece y ekseninde bosluk vericek
            padding:20, // icerde bosluk vericek
            //paddingHorizontal:20, // sadece x ekseninde icerde bosluk vericek
            //paddingVertical:20, // sadece y ekseninde icerde bosluk vericek
            borderRadius:10, // koseleri yuvarlatir
        }


    })