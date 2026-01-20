    import { StyleSheet, Text, View , Image} from 'react-native'
    import React from 'react'

    export default function Information({title , imageSource, desc}) {
    return (
        <View>
            <Image style={styles.image} source={imageSource} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        </View>
    )
    }
    const styles = StyleSheet.create({
        image:{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
        },
        title:{
            fontSize:24,
            fontWeight:'bold',
            color:'blue',
            textAlign:'center',
        },desc:{
            fontSize:16,
            color:'black',
            fontWeight:'normal',
            textAlign:'center',
            
        }
    })