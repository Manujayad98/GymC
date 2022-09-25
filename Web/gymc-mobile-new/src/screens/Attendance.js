import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButtonComponent'

const Attendance = ({navigation}) => {
  return (
    <View>
      <Text>Attendance</Text>
      <CustomButton text="back"
      onPress={() =>
        navigation.navigate('Tabs')}
      />
    </View>
  )
}

export default Attendance