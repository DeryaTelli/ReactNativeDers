    import { StyleSheet, Text, View , ScrollView} from 'react-native'
    import React from 'react'
    import Information from '../../components/Information';


    export default function CoursesInformationScreen() {
    return (
        <ScrollView>
        <Information
        title='Flutter Education'
        imageSource={require('../../assets/flutter.jpg')}
        desc="Detail Flutter Education"
        />
        <Information
         title='Kotlin Education'
        imageSource={require('../../assets/kotlin.png')}
        desc="Detail Kotlin Education"/>
        <Information
         title='React Native Education'
        imageSource={require('../../assets/react.png')}
        desc="Detail React Native Education"/>
        <Information
         title='Swift Education'
        imageSource={require('../../assets/swift.png')}
        desc="Detail Swift Education"/>
        </ScrollView>
    )
    }

    const styles = StyleSheet.create({})