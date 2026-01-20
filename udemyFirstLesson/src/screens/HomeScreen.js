import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        <Button
        title='Courses'
        onPress={()=> navigation.navigate('Courses Screen') }
        />
    </View>
    )
}

const styles = StyleSheet.create({
});