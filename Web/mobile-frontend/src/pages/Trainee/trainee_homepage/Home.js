import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, CheckBox } from 'react-native'
import React, { useState } from 'react'
// import Logo from '../../../../assets/logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();



    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.homecontainer}>
                    <View style={styles.header}>
                        <Text><Icon name="user-circle" size={30} color="#fff"
                            onPress={() =>
                                navigation.navigate('Startup')}

                        />
                        <Text style={styles.profilename}>Sumudu Perera</Text>

                        </Text>
                    </View>
                    <View style={styles.homebody}></View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    root: {

        alignSelf: 'center',
        // justifyContent:'center',
        padding: 20,
        backgroundColor: '#121928',
        height: 800,
        textAlign: 'left',
        width: 360,
    },
    logo: {
        width: '70%',
        height: '100vh',
        marginBottom: 40,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 18,
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        padding: 30,
        alignSelf: 'center'
    },
    button: {
        marginTop: 20,
    },
    homecontainer: {
        flex: 1,
    },
    header: {
        // display:'flex',
        paddingLeft: 180,
        width: '100%',
        height: '15%',
        alignContent: 'right',
        // backgroundColor: '#eee',
        color: 'white',
    },
    profilename: {
        color: 'white',
    },
    homebody:{
        width: '100%',
        height:'85%',
        padding: 5,
        flexDirection:'row',
        flexWrap:5,
    }
})

export default Home