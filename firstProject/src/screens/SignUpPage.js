    import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
    import { SafeAreaView } from 'react-native-safe-area-context';
    import React, {useState} from 'react'
    import { CustomTextInput,CustomButton } from '../components'

    
    const SignUpPage = ({navigation} ) => {
    const [name, setName] = useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    return (
        
        <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>
            <Image 
                    source={require('../../assets/images/icon.png')}
                    style={styles.imageStyle}
                    />
            <Text style={styles.signUpStyle}>Sign Up </Text>
        </View>
        
        <View style={styles.textInputContainer}>
            <CustomTextInput
                title="Name"
                isSecure={false}
                handleOnChangeText={setName}
                handleValue={name}
                handlePlaceholder="Enter Your Name"
            />

            <CustomTextInput
                title="Email"
                isSecure={false}
                handleOnChangeText={setEmail}
                handleValue={email}
                handlePlaceholder="Enter Your Email"
            />

            <CustomTextInput
                title="Password"
                isSecure={true}
                handleOnChangeText={setPassword}
                handleValue={password}
                handlePlaceholder="Create Your Password"
            />
        </View>

        <View style={styles.signUpOptions}>
            <CustomButton
                buttonText="Sign Up"
                setWidth="80%"
                handleOnPress={()=>{console.log(name," ", email," ", password)}}
                buttonColor="lightblue"
                pressedButton="gray"
            />
            <Pressable 
                onPress={()=>navigation.navigate("Login")}
            >
                <Text style={styles.textStyle}>Already have an account? Login</Text>
            </Pressable>
        </View>
        </SafeAreaView>
        
    )
}

    export default SignUpPage

    const styles = StyleSheet.create({
    container: {
        flex: 1, //butun ekran kaplansin
        alignItems: 'center',
        justifyContent: 'center',
    },textInputContainer:{
        flex:2,
        paddingVertical:8,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'

    },titleContainer:{
        flex:2,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    signUpOptions:{
        flex:2,
        width:'100%',
        alignItems: 'center',
        marginTop:28,
        justifyContent: 'space-between'
        
    },
    signUpStyle:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:30,
    },imageStyle:{
        width:80,
        height:80,
        marginBottom:20,
    },textStyle:{
        fontWeight:'semibold',
    }

    })