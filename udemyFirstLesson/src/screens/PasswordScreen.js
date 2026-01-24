    import { StyleSheet, Text, View , TextInput } from 'react-native'
    import React ,{useState} from 'react'

    export default function PasswordScreen() {
        const [password, setPassword] = useState('')
        
    return (
        <View style={styles.main}>
        <Text>Enter Your Password</Text>
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize='none' // buyuk harf otomatik yapma
        autoCorrect={false}// duzeltme kelimesi 
        value={password}
        onChange={(newValue)=> setPassword(newValue)}
        />
        {password.length<6 
            ?(<Text>Password must be at least 6 characters</Text>)
            : null} 
        </View>
    )
    }

    const styles = StyleSheet.create({
        main:{
        margin:10,
        },
        input:{
        borderColor:'black',
        borderWidth:1.5,
        padding:10,
        marginTop:10,
        borderRadius:12
        }
    })