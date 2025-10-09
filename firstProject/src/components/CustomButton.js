    import { Animated as RNAnimated, StyleSheet, Text, View , Pressable, Animated} from 'react-native'
    import React from 'react'
import Animated, { FadeIn } from 'react-native-reanimated';
    const CustomButton = ({buttonText, setWidth, handleOnPress, buttonColor, pressedButton}) => {
    
    const  AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    return (
        <AnimatedPressable
            entering={FadeIn.duration(200)}
            onPress={()=>handleOnPress()}
            style={({pressed})=> [{
                    backgroundColor: pressed ? pressedButton : buttonColor,
                    width:setWidth,
                },styles.buttonStyle]}
                >
                    <Text style={styles.buttonTextStyle}>{buttonText}</Text>
            </AnimatedPressable>
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