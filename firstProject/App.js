import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable, //bunlar buton yapmamiza yariyor 
  
  } from 'react-native';

  import React , {useState} from 'react';

export default function App() {

 // const [state, setState]=useState("") // icine koydugum tirnakdan dolayi sadece string gelecegini anliyoruz 

  const [name, setName]=useState("")
  const [lastName, setLastName]=useState("")
  const [result, setResult]=useState("")
  console.log(name)
  console.log(lastName)

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //     <View style={styles.subContainer}>
    //       <Text style={styles.textStyle}> Hello Derya</Text>
    //     </View>
    // </View>

    <View style={styles.container}>
      <Text>Welcome{result}</Text>
      <Text>Name</Text>
      <TextInput
      placeholder='Enter your name'
      style={styles.textInputStyle}
      onChangeText={setName}
      value={name}
      />

      <Text> LastName</Text>
      <TextInput
      placeholder='Enter your last name'
      style={styles.textInputStyle}
      onChangeText={setLastName}
      value={lastName}
      />

      <Pressable
      onPress={()=> setResult(name+" "+lastName)}
      style={({pressed})=> [{
        backgroundColor: pressed ? "gray" : "blue",
      },styles.buttonStyle]}
      >
        <Text style={styles.buttonTextStyle}>Save</Text>
      </Pressable>
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
});
