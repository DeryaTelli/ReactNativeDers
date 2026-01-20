import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

export default function CoursesScreen() {
    const courses=[
    {id:1 , name: 'Flutter'},
    {id:2 , name: 'React Native'},
    {id:3 , name: 'Swift'},
    {id:4 , name: 'Kotlin'},
    ];
    return (
        <View>
        <FlatList
        //hep dikey siralanir bu ama yatay sirali istersen 
        //horizontal={true} //yatay yapar
        //showsHorizontalScrollIndicator={false} // yatay scroll bar i kaldirir
        data={courses}
        keyExtractor={(item)=>item.id.toString()} // elemanlarin farkli oldugunu bunun sayesinde anliyoruz 
        renderItem={({item})=>( <Text style={styles.listContent}>{item.name}</Text>
        )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    listContent:{
    fontSize:20,
    fontWeight:'normal',
    color:'blue',
    backgroundColor:'yellow',
    marginVertical:10,
    padding:12,
    }
});