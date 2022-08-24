import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
// import Logo from '../../../../assets/logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';



import ScrollableFeed from 'react-scrollable-feed'


//announcement Feed

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Annoucement 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Annoucement 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Annoucement 3',
    },
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);




const Trainee_Home_Page = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const items = ['Gym Closed', 'Item 2', 'Item3', 'Item4'];
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

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
                    <View style={styles.homebody}>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <br></br>
                                <Text><Icon name="calendar" size={45} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text>Appointment</Text>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon2 name="wallet" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text>Payments</Text>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon name="qrcode" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text>Attendance</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text><Icon3 name="feedback" size={55} color="#fff"
                                    onPress={() =>
                                        navigation.navigate('Startup')}

                                /></Text>
                                <Text>Feedback</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lowScrollFeed}>
                        <ScrollableFeed>
                            {/* {items.map((item, i) => <div key={i}>{item}</div>)} */}


                            <SafeAreaView style={styles.container}>
                                <FlatList
                                    data={DATA}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>
                        </ScrollableFeed>
                    </View>
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
        // width: 360,
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
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    profilename: {
        color: 'white',
    },
    homebody: {
        color: 'white',
        width: '100%',
        height: '30%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 4,
        // color: 'white'
    },
    inner: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // color:'white'
    },
    lowScrollFeed: {
        color: 'white',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#989090',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:5
    },
    title: {
        fontSize: 32,
    },
})

export default Trainee_Home_Page