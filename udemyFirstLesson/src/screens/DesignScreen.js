    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'

    export default function DesignScreen() {
    return (
        <View style={styles.mainView}>
            <Text style={styles.mainTextOne}>1</Text>
            {/* <Text style={styles.mainTextTwo}>2</Text>
            <Text style={styles.mainTextThree}>3</Text> */}
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
            borderRadius:20,
            //alignItems:'stretch', hic bir sey degistirmeyen deger 
            //alignItems:'flex-start', // baslangica gelir deger  
            //flexDirection: 'row', // yada yada dikeyde hizalama nesneleri 
           // justifyContent: 'center', // yatayda hizalama yapiyor ortaliyor 
            height: 400


        },
        mainTextOne:{
            borderWidth:1,
            borderColor:'red',
            margin:10, // x ve y ekseninda  disa dogru bosluk vericek 
            //marginHorizontal:20, // sadece x ekseninde bosluk vericek
            //marginVertical:20, // sadece y ekseninde bosluk vericek
            padding:20, // icerde bosluk vericek
            //paddingHorizontal:20, // sadece x ekseninde icerde bosluk vericek
            //paddingVertical:20, // sadece y ekseninde icerde bosluk vericek
            borderRadius:10, // koseleri yuvarlatir
            //felx:4
            //alignSelf:'flex-start'
            position: 'absolute',
            //top:0,
            //left:0,
            //bottom:0,
            //right:0
        },
        mainTextTwo:{
            borderWidth:1,
            borderColor:'red',
            margin:10,
            padding:20,
            borderRadius:10,
            //flex:5 // bos alani kapliyor 
            //top:10, // yukaridan bosluk veriyor 
            left:10,
            //bottom:20 // asagidan bosluk vererek seklin yukari cikmasini saglicak 


        },
        mainTextThree:{
            borderWidth:1,
            borderColor:'red',
            margin:10,
            padding:20,
            borderRadius:10,
            //flex:1
            
        }


    })