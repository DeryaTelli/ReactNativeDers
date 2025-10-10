    import { StyleSheet, Text, Pressable} from 'react-native'
    import React from 'react'
    
    const CustomButton = ({buttonText, setWidth, handleOnPress, buttonColor, pressedButton}) => {
    
    
    return (
        <Pressable
            onPress={()=>handleOnPress()}
            style={({pressed})=> [{
                    backgroundColor: pressed ? pressedButton : buttonColor,
                    width:setWidth,
                },styles.buttonStyle]}
                >
                    <Text style={styles.buttonTextStyle}>{buttonText}</Text>
        </Pressable>
    )
    }

    export default CustomButton

    const styles = StyleSheet.create({
        buttonStyle:{
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center', 
        marginTop:20,
    },
    buttonTextStyle:{
        fontWeight:'bold',
        color:'white',
    }
    })