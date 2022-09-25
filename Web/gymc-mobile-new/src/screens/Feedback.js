import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButtonComponent'

const Feedback = ({navigation}) => {
  return (
    <View>
      <Text>feedback</Text>
      <CustomButton text="back"
      onPress={() =>
        navigation.navigate('Tabs')}
      />
    </View>
  )
}

export default Feedback