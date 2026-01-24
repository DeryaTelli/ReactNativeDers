    import { StyleSheet, Text, View, Button  } from 'react-native'
    import React, {useState, useReducer, } from 'react'

    
    const reducer = (state, action) => {
        console.log(state)
        console.log(action)
        //  state == {count:0}
        // action == {type:'increase' || 'decrease', payload:1}
        switch(action.type){
            case 'increase':
                return {...state, count: state.count + action.payload}
            case 'decrease':
                return {...state, count: state.count - action.payload}
            default:
                return state;
        }

    }
    export default function CounterScreen() {

        const [state, dispatch] = useReducer(reducer,{count:0})
        
        // usestate 
        //const [counter, setCounter] = useState(0)
        //useStateSnippet 
        // useState icine verdimiz deger baslangic degeri 
        // counter degiskendir degeri tutar
        // setCounter ise fonksiyondur ve counter degerini degistirmek icin kullanilir
    return (
        <View>
        <Text style={styles.text}> Sayı: {state.count}</Text>
        <Button
        styles={styles.button}
        title='Increase'
        onPress={()=>{
            dispatch({type:'increase', payload:1})
           // setCounter(counter + 1)
        }}
        />
        <Button
        title='Decrease'
        onPress={()=>{
            dispatch({type:'decrease', payload:1})
            //setCounter(counter - 1)
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