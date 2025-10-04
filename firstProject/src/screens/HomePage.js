    import { StyleSheet, Text, View } from 'react-native'
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
            allData.push(doc.data())
        });
        setData(allData)
        }catch(error){
            console.log(error)
        }
        
    }

    //delete data from firebase 
    const deleteData=async()=>{
        await deleteDoc(doc(db, "reactNativeLesson","NOr4DKWuEwbde9YZP00w"))
    }
    
    //update data from firebase 
    const updateData=async()=>{
        try{
            const lessonData=doc(db,"reactNativeLesson", "PfWOyjSNwYE7SK8XJeG3")
            await updateDoc(lessonData,{lesson:100});
        }catch(error){
            console.log(error)
        }

    }

    return (
        <View style={styles.container}>

        
        {data.map((value,index)=>{
            return(
                <View key={index}>
                    <Text>{index}</Text>
                    <Text>{value.title}</Text>
                    <Text>{value.content} </Text>
                    <Text>{value.lesson}</Text>
                </View>
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