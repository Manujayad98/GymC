import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButtonComponent'

const Appoinment = ({navigation}) => {
  return (
    <View>
      <Text>Appoinment</Text>
      <CustomButton text="back"
      onPress={() =>
        navigation.navigate('Tabs')}
      />
    </View>
  )
}

export default Appoinment