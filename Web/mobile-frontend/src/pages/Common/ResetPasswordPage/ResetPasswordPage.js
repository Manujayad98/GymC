import { Text, View ,StyleSheet,ScrollView} from 'react-native'
import React, { Component } from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

export class ResetPasswordPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text><Icon name="backward" size={30} color="#fff" 
        onPress={() =>
          navigation.navigate('Forgot', { name: 'Jane' })} 
        /></Text>
        <Text style={styles.title}>
        
            Reset Password
        </Text>
        <Text style={styles.text}>New Password</Text>
        <CustomInput 
            // placeholder="Username" 
            // value={username} 
            // setValue={setUsername}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <CustomInput 
            // placeholder="Username" 
            // value={username} 
            // setValue={setUsername}
        />
        <view style={styles.reset}>
        <CustomButton  text="Reset" type="PRIMARY" bgColor="red"/>
        </view>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    root:{
        
        // alignItems:'center',
        // justifyContent:'center',
        alignSelf:'center',
        padding:20,
        backgroundColor:'#121928',
        height:800,
        textAlign: 'left',
        width:360,
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
        padding:30,
        
    },
    text:{
        color:'white',
        textAlign: 'left',
        // marginTop:30,
        padding:20,
        fontWeight:500,
        fontSize:18,
       
    },
    reset:{
       marginTop:100,
       
    }
})

export default ResetPasswordPage