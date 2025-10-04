    import { StatusBar } from 'expo-status-bar';
    import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable, //bunlar buton yapmamiza yariyor 
    Image,
    } from 'react-native';
    import React , {useState, useEffect} from 'react';
    import { Loading, CustomTextInput, CustomButton } from '../components';
    import { useSelector, useDispatch } from 'react-redux';
    import { setEmail,setPassword,setIsLoading, setLogin , autoLogin} from '../redux/userSlice';  
    import { login } from '../redux/userSlice';  


    const LoginPage = ({navigation})=> {
    // const [state, setState]=useState("") // icine koydugum tirnakdan dolayi sadece string gelecegini anliyoruz 
    
    //local depolama farkli sayfaya gitigim zaman tutum yazilar kayip olacaktir 
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    // const [isLoading, setIsLoading]=useState(false)


  








    //USERSLICE ICERISINDEKI VERILERIN OKUNMASI
    //email ve password kaldirdik suslu parantez icinden  
    const {  isLoading } = useSelector((state) => state.user); //store icindeki user a erismek icin
    



    //userSlice icerisindeki reducer yapilarini kullanma veya veri gonderme 
    const dispatch=useDispatch();


      //kullanici daha once giris yaptiysa otomatik giris yap 
    useEffect(()=>{
        dispatch(autoLogin())
    },[])





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
            handleOnChangeText={(text)=>(setEmail(text))} //(text)=>dispatch(setEmail(text)
            handleValue={email}
            handlePlaceholder="Enter Your Email"
        />
        <CustomTextInput
            title="Password"
            isSecure={true}
            handleOnChangeText={(text)=>(setPassword(text)) }
            handleValue={password}
            handlePlaceholder="Enter Your Password"
        />

        <CustomButton
            buttonText="Login"
            setWidth="80%"
            handleOnPress={()=>{dispatch(login({ email, password}))}}
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
            changeIsLoading={()=>dispatch(setIsLoading(false))}/> : null}
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
