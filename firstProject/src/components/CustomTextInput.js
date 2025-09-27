    import { StyleSheet, Text, View , TextInput } from 'react-native'
    import React from 'react'

    const CustomTextInput = ({title,isSecure,handleOnChangeText,handleValue,handlePlaceholder}) => {
    return (
            <View style={styles.inputContainer}>
                <Text style={styles.inputBoxText}>{title}</Text>
                <TextInput
                    placeholder={handlePlaceholder}
                    style={styles.textInputStyle}
                    secureTextEntry={isSecure}
                    onChangeText={handleOnChangeText}
                    value={handleValue}
                />
            </View>
    )
    }

    export default CustomTextInput

    const styles = StyleSheet.create({
    inputContainer:{
        width:'80%',
    },
    textInputStyle:{
        borderBottomWidth:0.5,
        width: '100%',
        height: 50,
        borderRadious: 20,
        marginVertical:10,
        textAlign:'center',
        collor:'blue',
        fontWeight:'bold',
    },inputBoxText:{
        fontWeight:'bold',
        alignItems:'flex-start',
        width:'80%',
        textAlign:'left',
    }
    })