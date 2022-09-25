import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButtonComponent'

const Payments = ({navigation}) => {
  return (
    <View>
      <Text>Payments</Text>
      <CustomButton text="back"
      onPress={() =>
        navigation.navigate('Tabs')}
      />
    </View>
  )
}

export default Payments