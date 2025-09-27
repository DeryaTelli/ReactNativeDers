import { 
    StyleSheet,
    Text, 
    View,
    ActivityIndicator,
    Pressable,
    } from 'react-native'
import React from 'react'

// const Loading = (props) => { bu sekilde de kullanabilirsin 
    const Loading = ({name, changeIsLoading}) => {
    return (
        <View style={styles.container}>
            <Pressable
            onPress={() => changeIsLoading()} 
            style={[{}, styles.closeButtonContainer]}
            ><Text style={styles.close}>X</Text></Pressable>
            <ActivityIndicator size="large" color="#0000ff"/>
            <Text style={styles.loginText}>{name} Loading..</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'tomato',
    },
    loginText:{
        fontWeight:'bold',
        fontSize:16,
        marginTop:10, //araya bosluk veriyoruz 
        color:'white',
    },
    closeButtonContainer:{
        backgroundColor: 'black',
        width:30,
        height:30,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:50,
        right:10,
    },
    close:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    }

})