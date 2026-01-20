import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        <Button
        style={styles.button}
        title='Courses'
        onPress={()=> navigation.navigate('Courses Screen') }
        />
        <Button
        style={styles.button}
        title='Courses Information'
        onPress={()=> navigation.navigate('Courses Information') }
        />
    </View>
    )
}

const styles = StyleSheet.create({
    button:{
        marginVertical:20,
        marginHorizontal:50,
        padding:10,
        
    }
});