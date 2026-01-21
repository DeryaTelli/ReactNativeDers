    import { StyleSheet, Text, View, Button  } from 'react-native'
    import React, {useState} from 'react'

    export default function CounterScreen() {
        const [counter, setCounter] = useState(0)
        //useStateSnippet 
        // useState icine verdimiz deger baslangic degeri 
        // counter degiskendir degeri tutar
        // setCounter ise fonksiyondur ve counter degerini degistirmek icin kullanilir
    return (
        <View>
        <Text style={styles.text}> Sayı: {counter}</Text>
        <Button
        styles={styles.button}
        title='Increase'
        onPress={()=>{
            setCounter(counter + 1)
        }}
        />
        <Button
        title='Decrease'
        onPress={()=>{
            setCounter(counter - 1)
        }}

        />
        </View>
    )
    }

    const styles = StyleSheet.create({
        button:{
        marginVertical:20,
        marginHorizontal:50,
        padding:10,
        },text:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center'
        }
    })