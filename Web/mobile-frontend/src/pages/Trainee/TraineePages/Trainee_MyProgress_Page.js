import * as React from 'react';
import { View, Text } from 'react-native';

export default function Trainee_MyProgress_Page({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121928' }}>
            <Text
                onPress={() => alert('This is the "My Progress" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>My Progress</Text>
        </View>
    );
}
