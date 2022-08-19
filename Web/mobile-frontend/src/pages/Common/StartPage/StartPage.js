import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../../assets/Start.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'

const StartPage = ({ navigation }) => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed=()=>{
        console.warn('Sign in success');
    }
    const onForgotPasswordPressed=()=>{
        console.warn('forgot');
    }

  return (
    <ScrollView>
    <View style={styles.root}>
     
      <Image source={Logo} style={styles.logo} 
      resizeMode="contain"/>
      <Text style={styles.heading1}>DON'T BE AFRAID OF<br/>FAILURE<br/>THIS IS THE WAY TO<br/>SUCCESS</Text>
      <Text style={styles.heading2}>Carry your day with good<br/>fitness</Text>
      
      <view style={styles.loginButton}>
      <CustomButton text="Login" type="PRIMARY" bgColor="#fff" fgColor="black"
        onPress={() =>
          navigation.navigate('Login', { name: 'Jane' })} 
        />
      </view>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        
        alignSelf:'center',
        alignItems:'center',
        marginTop:0,
        backgroundColor:'#121928',
        height:800,
        textAlign: 'left',
        width:360,
    },
    logo:{
        width:'100%',
        height:500,
        // marginBottom:10,
        alignSelf:'center',
        marginTop:0,
    },
    heading1:{
        color:'white',
        textAlign: 'center',
        fontSize:24,
        paddingTop:0,
        padding:10,
        fontWeight:'bold',
       
    },
    heading2:{
        color:'white',
        textAlign: 'center',
        fontSize:18,
        padding:10,
        
       
    }
})

export default StartPage