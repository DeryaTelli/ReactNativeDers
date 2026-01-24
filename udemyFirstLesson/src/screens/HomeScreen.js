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
        <Button
        style={styles.button}
        title='Counter App'
        onPress={()=> navigation.navigate('Counter App') }
        />
        <Button
        style={styles.button}
        title='Box App'
        onPress={()=> navigation.navigate('Box App') }
        />
        <Button
        style={styles.button}
        title='Color Change App'
        onPress={()=> navigation.navigate('Color Change App') }
        />
        <Button
        style={styles.button}
        title='Password Screen'
        onPress={()=> navigation.navigate('Password Screen') }
        />
        <Button
        style={styles.button}
        title='Design Screen'
        onPress={()=> navigation.navigate('Design Screen') }
        />
        <Button
        style={styles.button}
        title='Homework Screen'
        onPress={()=> navigation.navigate('Homework Screen') }
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