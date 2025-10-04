    import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
    import React, {useState, useEffect} from 'react'
    import { collection, addDoc } from 'firebase/firestore'
    import { db } from '../../firebaseConfig'
    import {  CustomButton } from '../components';
    import { getDocs ,doc } from 'firebase/firestore';
    import { deleteDoc } from 'firebase/firestore';
    import { updateDoc } from 'firebase/firestore';


    const HomePage = () => {

        
    const [data, setData] = useState([])
    const [isSaved, setIsSave]=useState(false)// otomatik get data demeden verileri cekmemize yardimci oluyor
    const [updatedData, setUpdateData] = useState("")
    console.log("data: ",data )
    console.log(isSaved)

    useEffect(()=>{ //otomaitik olarak cekecek verileri
        getData()
    },[isSaved])

    //send data to firebase 
    const sendData=async()=>{
        try{
            const docRef=await addDoc(collection(db,'reactNativeLesson'),{
                title:'Zero to Hero',
                content:'React Native tutorial for beginner ',
                lesson: 95
            });
            console.log("Document written with ID:",docRef.id);
        }catch(e){
            console.error("Error adding document:",e);
        }
    }

    //get data from firebase 
    const getData = async()=>{
        const allData=[];
        try{
            const querySnapshot = await getDocs(collection(db,"reactNativeLesson"));
            querySnapshot.forEach((doc)=>{
            //setData([...data, doc.data()]) //...data daha onceki verileri silmicek onceki verilerin sonuna ekliyecek yenilerini 
            allData.push({...doc.data(), id:doc.id})
        });
        setData(allData)
        }catch(error){
            console.log(error)
        }
        
    }

    //delete data from firebase 
    const deleteData=async(value)=>{
        try{
            await deleteDoc(doc(db, "reactNativeLesson", value))
            console.log("delete successful")
        }catch(error){
            console.log(error)
        }}
    
    //update data from firebase 
    const updateData=async(value)=>{
        try{
            const lessonData=doc(db,"reactNativeLesson", value)
            await updateDoc(lessonData,{title:updatedData});
        }catch(error){
            console.log(error)
        }

    }

    return (
        <View style={styles.container}>

            <TextInput
            value={updatedData}
            onChangeText={setUpdateData}
            placeholder='Enter Your data'
            style={{borderWidth:1, width:'50%',paddingVertical:10, textAlign:'center', marginBottom:20}}
            />

        
        {data.map((value,index)=>{
            return(
                <Pressable 
                onPress={()=>{updateData(value.id), setIsSave(isSaved===false ? true : false)}}
                key={index}>
                    <Text>{index}</Text>
                    <Text>{value.id}</Text>
                    <Text>{value.title}</Text>
                    <Text>{value.content} </Text>
                    <Text>{value.lesson}</Text>
                </Pressable>
            )
        })}


        <CustomButton 
        buttonText={'Save'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={() => {sendData(),setIsSave(isSaved===false ? true : false)}}
        />
        
        <CustomButton 
        buttonText={'Get Data'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
        />

        <CustomButton 
        buttonText={'Delete Data'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={deleteData}
        />

        <CustomButton 
        buttonText={'Update'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={updateData}
        />
        </View>
    )
    }

    export default HomePage

    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }
    })