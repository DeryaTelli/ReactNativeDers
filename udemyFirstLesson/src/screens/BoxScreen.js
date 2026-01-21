    import { StyleSheet, Text, View ,Button , FlatList} from 'react-native'
    import React, {useState} from 'react'

    export default function BoxScreen() {
        const [colors, setColors] = useState([]);
        const randomColor=()=>{
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return `rgb(${red},${green},${blue})`;
        }

    return (
        <View>
        <Text>BoxScreen</Text>
        <Button 
        title='Box Add'
        onPress={()=>{
            setColors([...colors, randomColor()])
            //onceden kac eleman varsa ondan sonra devam etsin anlami tasiyor ... nokta 

        }}/>
        <FlatList
        horizontal={true}
        data={colors}
        keyExtractor={(item)=>item}
        renderItem ={({item})=>{
            return ( <View style={{height:100, width:100,backgroundColor:item,marginHorizontal:10}}></View>)}}
        />
        </View>
    )
    }

    const styles = StyleSheet.create({
    
    })