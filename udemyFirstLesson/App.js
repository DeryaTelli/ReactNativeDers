import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message ='JavaScript ';
  const courses=[
    {id:1 , name: 'Flutter'},
    {id:2 , name: 'React Native'},
    {id:3 , name: 'Swift'},
    {id:4 , name: 'Kotlin'},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.content}>React Js</Text>
      <Text style={styles.content}>{message}</Text>
      <FlatList
      //hep dikey siralanir bu ama yatay sirali istersen 
      //horizontal={true} //yatay yapar
      //showsHorizontalScrollIndicator={false} // yatay scroll bar i kaldirir
        data={courses}
        keyExtractor={(item)=>item.id.toString()} // elemanlarin farkli oldugunu bunun sayesinde anliyoruz 
        renderItem={({item})=>( <Text style={styles.listContent}>{item.name}</Text>
        )}
      />
      
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
  title:{
    fontSize:35,
    fontWeight:'bold'
  },
  content:{
    fontSize:24,
    fontWeight:'normal'
  },
  listContent:{
    fontSize:20,
    fontWeight:'normal',
    color:'blue',
    backgroundColor:'yellow',
    marginVertical:10,
    padding:12,
  }
});
