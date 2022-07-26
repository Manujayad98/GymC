import React, { useState, useEffect } from "react";
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from "axios";

const MyComponent = ({navigation}) => {
  const _goBack = () => navigation.navigate('Tabs');

  const traineeId="1";

  const [ann, setAnnoucements] = useState([]);
    // console.log(ann.title);
    useEffect(() => {
        console.log("announcement get called");
        // 
        const setResponse = async (data) => {
            await axios
                .get("http://172.20.10.3:8080/api/v1/getPayments/"+traineeId, {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHWU1DIiwic3ViIjoiU3VkYW0iLCJpYXQiOjE2NjY1MjM2OTEsImV4cCI6MTY2Njg4MzY5MX0.R8xf3VfPSpMQruyFjjGLbOti7HljY_Jr05N2MuocmK0`
                    }
                })
                .then((res) => {
                    console.log(res.data)

                    // console.log(res.data[0])
                    setAnnoucements(res.data);
                    console.log(ann);
                })
                .catch((err) => {
                    console.log(err);
                });


        }
        setResponse();
    }, []);






const amount=200;  

// const postData =() =>{

//   console.log("announcement get called");
//         // 
//         const setResponse = async (data) => {
//             await axios
//                 .get("http://10.22.162.153:8080/api/v1/notifications/"+userId, {
//                     headers: {
//                         'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHWU1DIiwic3ViIjoiU3VkYW0iLCJpYXQiOjE2NjY3ODg2NjEsImV4cCI6MTY2NjgyNDY2MX0.xgjW2erRtGIsFTJuYHPbcwHsiCa1-ucrRdvs6rhOyZM`
//                     }
//                 })
//                 .then((res) => {
//                     console.log(res.data)

//                     // console.log(res.data[0])
//                     setNotifications(res.data);
//                     console.log(notifi);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });


//         }
//         setResponse();
  
// }  

  return (
    <View>
    <Appbar.Header style={styles.top}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Payments" style={styles.top} />
      
    </Appbar.Header>
        <View style={styles.container}> 
        {/* <Header/> */}
        <ScrollView>
         <View style={styles.content}>
          <Text style={styles.titletext}>Payment Plan</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
                </View> */}
                <View style={styles.pdetails}>
                <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.subtext}></Text>
                    <Text style={styles.subtext}>Type : {ann.type}</Text>
                </Card.Content>
              </Card>
                    
                </View>
          
  
        </View>
  
        <View style={styles.content}>
          <Text style={styles.titletext}>Last Payment</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
                </View> */}
                <View style={styles.pdetails}>
                <Card style={styles.card}>
                  <Card.Content>
                    <Text style={styles.subtext}>Date :  {ann.lastDate}</Text>
                    <Text style={styles.subtext}>Amount :  {ann.lastAmount}</Text>
                    </Card.Content>
                </Card>
                </View>
          
  
        </View>
  
        <View style={styles.content}>
          <Text style={styles.titletext}>Next Payment</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
                </View> */}
                <View style={styles.pdetails}>
                <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.subtext}>Date : {ann.nextDate}</Text>
                    </Card.Content>
                </Card>   
                </View>
          
  
        </View>
  
        <View style={styles.content}>
          {/* <Text style={styles.titletext}>Pay Now</Text> */}
          <Text onPress={() => postData} style={styles.titletext}>Pay Now</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
                </View> */}
           <View style={styles.pdetails}>
        <Card style={styles.card}>
                <Card.Content>
          
                {ann.amount}

           </Card.Content>
                </Card>   
          
                
        </View>     
                
                
          
  
        </View>
        
        
        <View style={styles.btn}>
          <Button  title='Pay'/>
        </View>
        
       
  
        
        
        </ScrollView>
  
      </View>
      </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAF0F8',
    paddingTop: 20,
    paddingHorizontal: 15,  
  },
  content : {
    padding: 25,
    paddingLeft: 30,

  },
  card:{
    backgroundColor: "#90E0EF",
    width:300
  },
  top: {
    backgroundColor: "#000",
   
  },
  titletext :{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',

  },
  subtext :{
    fontSize: 16,
    color: '#000',
    marginTop: 2,

  },
  text :{
    fontSize: 18,
    color:'#000',
    textAlign: 'left',
  },
  img :{
    width:350,
    height:300,
    marginRight: 100,
  },
  pdetails: {
    marginTop: 20,
  },
  input :{
    padding: 8,
    margin: 20,
    width: 328,
    backgroundColor: '#D9D9D9',
    marginLeft: 28,

  },
  btn :{
    padding: 28,
    marginHorizontal: 100, 
     
  }
});




