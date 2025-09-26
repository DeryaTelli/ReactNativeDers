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
  import Loading from './src/components/Loading';

export default function App() {

 // const [state, setState]=useState("") // icine koydugum tirnakdan dolayi sadece string gelecegini anliyoruz 
  
 //local depolama farkli sayfaya gitigim zaman tutum yazilar kayip olacaktir 
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [result, setResult]=useState("")
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

      <Image 
      source={require('./assets/images/icon.png')}
      style={styles.imageStyle}
      />
      <Text style={styles.welcomeStyle}>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
      placeholder='Enter Your Email'
      style={styles.textInputStyle}
      onChangeText={setEmail}
      value={email}
      inputMode='email' //klavyede @ .com gibi kisayollari getirir
      />

      <Text> Password</Text>
      <TextInput
      placeholder='Enter Your Password'
      style={styles.textInputStyle}
      onChangeText={setPassword}
      value={password}
      secureTextEntry={true} //sifre girerken yildiz yapar
      />

      <Pressable
      onPress ={()=>{setIsLoading(true)}}
      // onPress={()=> setResult(name+" "+lastName)}
      style={({pressed})=> [{
        backgroundColor: pressed ? "gray" : "blue",
      },styles.buttonStyle]}
      >
        <Text style={styles.buttonTextStyle}>Save</Text>
      </Pressable>
      {/* {isLoading ? <Loading/> : null}  eger true ise loading ol degisle bir sey yapma demek */}
      {/* {isLoading && <Loading/>}  */}
      {isLoading 
        ? <Loading 
        name="buttonName"
        changeIsLoading={()=>setIsLoading(false)}/> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    borderWidth:1,
    width: '80%',
    height: 50,
    borderRadious: 10,
    marginVertical:10,
    textAlign:'center',
    collor:'blue',
    fontWeight:'bold',
  },
  buttonStyle:{
    width:'80%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center', 
  },
  buttonTextStyle:{
    fontWeight:'bold',
    color:'white',
  },
  imageStyle:{
    width:100,
    height:100,
  },
  welcomeStyle:{
    fontSize:26,
    fontWeight:'bold',
  }

});
