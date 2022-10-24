import { View, Text, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React,{useState,useEffect} from "react";
import Header from "../components/HeaderComponent";
import { icons, COLORS, SIZES } from "../constans";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from "axios";

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// const ann = [
//     {
//         id: '1',
//         title: 'Gym closure',
//         author: 'by Owner - 2nd May 2022',
//         note: 'Gym c will be closed on 20th May 2022 sdsdsddsds sdsa dasd sadsad sadasd dsdsad dsdad dsadsasd dsadasd sdasd adasd ',

//     },
//     {
//         id: '2',
//         title: 'Maintenance',
//         author: 'by Admin -2nd May 2022',
//         note: 'Gym c will be closed on 10th August 2022',


//     },
//     {
//         id: '3',
//         title: 'Annoucement 3',
//         author: 'by Owner - 2nd May 2022',
//         note: 'Gym c will be closed on 2nd September 2022'
//     },
// ];
const Announcements = () => {

    const [ann, setAnnoucements] = useState([]);
    console.log(ann.title);
    useEffect(() => {
        console.log("annocement get called");
        axios
          .get("http://10.22.162.153:8080/api/v1/annoucements", {
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHWU1DIiwic3ViIjoiU3VkYW0iLCJpYXQiOjE2NjY1MjM2OTEsImV4cCI6MTY2Njg4MzY5MX0.R8xf3VfPSpMQruyFjjGLbOti7HljY_Jr05N2MuocmK0` 
            }})
          .then((res) => {
            console.log(res.data)
            
            console.log(res.data[0])
            setAnnoucements(res.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      },[]);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Header title={"GYMC"} />
            <ScrollView>

                <View style={styles.root}>
                    <View style={styles.homecontainer}>
                        <View style={styles.header}>
                            <Text><Icon name="user-circle" size={30} color="#000"
                                onPress={() =>
                                    navigation.navigate('Startup')}

                            />
                                <Text style={styles.profilename}>Sumudu Perera</Text>

                            </Text>

                        </View>
                        <Text style={styles.titletext}>Announcements</Text>
                        <Text style={styles.sectionHeader}></Text>
                        <View style={styles.notificationbody}>
                        {ann.map((ann) => (
                                <Card style={styles.item}>
                                    <Card.Content>
                                        <Title  style={styles.announcementTitle} key={ann.id}>{ann.title}</Title>
                                        <Paragraph style={styles.announcementAuthor}>{ann.author}</Paragraph>
                                        <Paragraph style={styles.announcementNote}>{ann.note}</Paragraph>
                                    </Card.Content>
                                </Card>
                            ))};
                            
                        </View>
                        


                    </View>


                </View>
            </ScrollView></View>
    );
};

export default Announcements;

const styles = StyleSheet.create({

    root: {

        alignSelf: 'center',
        // justifyContent:'center',
        padding: 20,
        backgroundColor: '#CAF0F8',
        height: 1100,
        textAlign: 'left',
        width: '100%',
        color: 'black',
    },
    titletext :{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign:'center',
    
    },

    text: {
        color: 'black',
        textAlign: 'left',
        fontSize: 18,
        padding: 20,
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        padding: 30,
        alignSelf: 'center'
    },

    homecontainer: {
        flex: 1,
    },
    header: {
        paddingLeft: 180,
        width: '100%',
        height: '10%',
        alignContent: 'right',
        // backgroundColor: '#eee',
        color: 'black',

    },
    profilename: {
        color: 'black',
        marginLeft: '10px',
        marginBottom: '20px',
    },
    sectionHeader: {
        marginTop: 20,
        fontSize: 18,
        paddingBottom: 10,
        paddingRight: 50,
        color: 'black',
        alignContent: 'left',
        // fontFamily:'Poppins',
        fontWeight: 600,


    },


    notificationbody: {
        borderTopColor: 'black',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    announcementTitle: {

        fontWeight: 'bold',
    },
    announcementAuthor: {
        color: '#5c5b5e',
        fontWeight: 'bold',

    },
    announcementNote: {
        paddingTop: 10,
    },

    lowScrollFeed: {
        color: 'black',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#90E0EF',
        color: 'black',
        // padding: 40,
        marginVertical: 7,
        marginHorizontal: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 32,
    },
})
