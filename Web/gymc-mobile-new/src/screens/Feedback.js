import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { Card } from 'react-native-paper';

const MyComponent = ({navigation}) => {
  const _goBack = () => navigation.navigate('Tabs');
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.root}>
    <Appbar.Header  style={styles.top}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Feedback" />
      
    </Appbar.Header>
    <View style={styles.container}>
           
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.titletext}>Rating</Text>
                    
                    <View style={styles.starRater}>
                    
                     <Card style={styles.cardcontainer}>
                        <Card.Actions>
                        <StarRating
                            rating={rating}
                            onChange={setRating}
                            color="#000"
                        />
                        </Card.Actions>
                    </Card>
                    </View>

                </View>

                <View style={styles.content}>
                    <Text style={styles.titletext}>Comment</Text>
                    

                <Card style={styles.cardcontainer}>
                    <Card.Actions>
                        <View>
                            <TextInput
                                multiline = {true}
                                numberOfLines = {4} 
                                placeholder='Add Comment'
                                keyboardType='string'

                            />
                        </View>
                    </Card.Actions>
                </Card>
                </View>
                
                <View style={styles.btn}>
                    <Button title='Submit' />
                </View>
            </ScrollView>

        </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({

  header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: '#121928',
  },
  root: {

    alignSelf: 'center',
    backgroundColor: '#CAF0F8',
    height: 700,
    textAlign: 'left',
    width: '100%',
    color: 'black',
},

cardcontainer:{
    backgroundColor:'#90E0EF',
    marginTop:20
},

  title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000'
  },
  container: {
      flex: 1, 
      paddingTop: 20,
      paddingHorizontal: 15,
      
  },
  content: {
      padding: 25,
      paddingLeft: 30,

  },
  titletext: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',

  },
  top: {
    backgroundColor: "#000",
   
  },
  subtext: {
      fontSize: 16,
      color: '#000',
      marginTop: 2,

  },
  text: {
      fontSize: 18,
      color: '#000',
      textAlign: 'left',
  },
  img: {
      width: 350,
      height: 300,
      marginRight: 100,
  },
  starRater:{
      marginTop:20,
      
  },
  pdetails: {
      marginTop: 20,
      alignSelf:'left',
  },
  input: {
      padding: 8,
      margin: 20,
      // width: 328,
      height: 80,
      backgroundColor: 'rgba(152,144,144,0.3)',
      marginLeft: 28,
      color: 'white',
      borderRadius:5,

  },
  btn: {
      paddingRight: '5%',
      marginHorizontal: 100,
      borderRadius:10,

  }
});