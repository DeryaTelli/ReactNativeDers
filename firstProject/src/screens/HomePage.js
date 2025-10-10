    import { Pressable, StyleSheet, Text, View, TextInput , FlatList,} from 'react-native'
    import { SafeAreaView } from 'react-native-safe-area-context';
    import React, {useState, useEffect} from 'react'
    import { collection, addDoc } from 'firebase/firestore'
    import { db } from '../../firebaseConfig'
    import {  CustomButton } from '../components';
    import { getDocs ,doc } from 'firebase/firestore';
    import { deleteDoc } from 'firebase/firestore';
    import { updateDoc } from 'firebase/firestore';
    import { useDispatch } from 'react-redux';
    import { logout } from '../redux/userSlice';


    const HomePage = () => {
    const dispatch=useDispatch()

        
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

    //kullanici cikis islemleri 
    const handleLogout=()=>{
        try{
            dispatch(logout())
        }catch(error){
            console.log(error)
        }
    }


        
        const renderItem = ({item}) =>{
            return(
                <View style={styles.flatlistcontainer}>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.content} </Text>
                    <Text>{item.lesson}</Text>
                </View>
            )
        }

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}> To Do List</Text>


    
        

        <FlatList
            style={styles.flatlist}
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            
        />
            



        
        <CustomButton 
        buttonText={'Get Data'} 
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
        />

        <TextInput
        value={updatedData}
        onChangeText={setUpdateData}
        placeholder='Enter Your data'
        style={{borderWidth:1, width:'50%',paddingVertical:10, textAlign:'center', marginBottom:20}}
        />



        </SafeAreaView>
    )
    }

    export default HomePage

    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        flatlistcontainer:{
            borderBottomWidth:0.5,
            marginVertical:10,
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        flatlist:{
            width:'90%',
            padding:10,
        },
        title:{
            fontSize:24,
            fontWeight:'bold',
            color:'blue',
        }
    })