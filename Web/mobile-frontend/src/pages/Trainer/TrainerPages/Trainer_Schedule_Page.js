import * as React from 'react';
import { View, Text } from 'react-native';

export default function Trainer_Schedule_Page({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121928',  }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color:'white'}}>Schedule</Text>
        </View>
    );
}