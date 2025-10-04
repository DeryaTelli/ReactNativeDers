    import { StyleSheet, Text, View } from 'react-native'
    import React, {useState} from 'react'
    import { collection, addDoc } from 'firebase/firestore'
    import { db } from '../../firebaseConfig'
    import {  CustomButton } from '../components';
    import { getDocs ,doc } from 'firebase/firestore';
    import { deleteDoc } from 'firebase/firestore';
    import { updateDoc } from 'firebase/firestore';


    const HomePage = () => {

        
    const [data, setData] = useState([])
    console.log("data: ",data )

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
    const getData = async()=>{`
`
        const querySnapshot = await getDocs(collection(db,"reactNativeLesson"));
        querySnapshot.forEach((doc)=>{
            // 
            setData([...data, doc.data()]) //...data daha onceki verileri silmicek onceki verilerin sonuna ekliyecek yenilerini 
        });
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

        <Text>{data[0]?.title}</Text>
        <Text>{data[0]?.content} </Text>
        <Text>{data[0]?.lesson}</Text>
        <Text>{data[1]?.title}</Text>
        <Text>{data[1]?.content} </Text>
        <Text>{data[1]?.lesson}</Text>


        <CustomButton 
        buttonText={'Save'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={sendData}
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