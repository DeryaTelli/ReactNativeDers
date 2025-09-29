    import { StatusBar } from 'expo-status-bar';
    import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable, //bunlar buton yapmamiza yariyor 
    Image,
    } from 'react-native';

    import React , {useState} from 'react';
    import { Loading, CustomTextInput, CustomButton } from '../components';    

    const LoginPage = ({navigation})=> {
    // const [state, setState]=useState("") // icine koydugum tirnakdan dolayi sadece string gelecegini anliyoruz 
    
    //local depolama farkli sayfaya gitigim zaman tutum yazilar kayip olacaktir 
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [isLoading, setIsLoading]=useState(false)

    // console.log(email)
    // console.log(password)

    return (
        // <View style={styles.container}>
        //   <Text>Open up App.js to start working on your app!</Text>
        //   <StatusBar style="auto" />
        //     <View style={styles.subContainer}>
        //       <Text style={styles.textStyle}> Hello Derya</Text>
        //     </View>
        // </View>

        <View style={styles.container}>
        <Text style={styles.welcomeStyle}>Welcome </Text>
        <Image 
        source={require('../../assets/images/icon.png')}
        style={styles.imageStyle}
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
            handlePlaceholder="Enter Your Password"
        />

        <CustomButton
            buttonText="Login"
            setWidth="80%"
            handleOnPress={()=>{setIsLoading(true)}}
            buttonColor="gray"
            pressedButton="blue"
            
        />
        <CustomButton
            buttonText="Sign Up"
            setWidth="30%"
            handleOnPress={()=>{navigation.navigate('SignUp')}}
            buttonColor="lightblue"
            pressedButton="gray"
        />

{/* 
        <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>Email</Text>
        <TextInput
            placeholder='Enter Your Email'
            style={styles.textInputStyle}
            onChangeText={setEmail}
            value={email}
            inputMode='email' //klavyede @ .com gibi kisayollari getirir
        />
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}> Password</Text>
        <TextInput
            placeholder='Enter Your Password'
            style={styles.textInputStyle}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true} //sifre girerken yildiz yapar
        />
        </View> */}

        {/* <Pressable
        onPress ={()=>{setIsLoading(true)}}
        // onPress={()=> setResult(name+" "+lastName)}
        style={({pressed})=> [{
            backgroundColor: pressed ? "gray" : "blue",
        },styles.buttonStyle]}
        >
            <Text style={styles.buttonTextStyle}>Login</Text>
        </Pressable>

        <Pressable
        onPress ={()=> navigation.navigate('SignUp')}
        // onPress={()=> setResult(name+" "+lastName)}
        style={({pressed})=> [{
            backgroundColor: pressed ? "lightblue" : "gray",
            marginTop:20,
        },styles.signUpButtonStyle]}
        >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
        </Pressable> */}


        {/* {isLoading ? <Loading/> : null}  eger true ise loading ol degisle bir sey yapma demek */}
        {/* {isLoading && <Loading/>}  */}
        {isLoading 
            ? <Loading 
            name="buttonName"
            changeIsLoading={()=>setIsLoading(false)}/> : null}
        </View>
    );
    }
    export default LoginPage;
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle:{
        width:100,
        height:100,
        marginBottom:20,
    },
    welcomeStyle:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
    },
    });
