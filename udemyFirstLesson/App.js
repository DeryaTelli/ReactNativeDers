import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesScreen from './src/screens/CoursesScreen';
import HomeScreen from './src/screens/HomeScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  //const message="Welcome to React Native";
  return (
        // <Text style={styles.title}>React Native</Text>
        // <Text style={styles.content}>React Js</Text>
        // <Text style={styles.content}>{message}</Text>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Courses Screen" component={CoursesScreen}/>
        <Stack.Screen name="Courses Information" component={CoursesInformationScreen}/>
        <Stack.Screen name="Counter App" component={CounterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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
});


