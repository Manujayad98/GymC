import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = ({navigation}) => {
  const _goBack = () => navigation.navigate('Tabs');

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
                    <Text style={styles.subtext}>Time period : Monthly</Text>
                    <Text style={styles.subtext}>Personal/ Non-Personal : Personal</Text>
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
                    <Text style={styles.subtext}>Date :  2 nd May 20222</Text>
                    <Text style={styles.subtext}>Amount : Rs. 1000.00</Text>
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
                    <Text style={styles.subtext}>Date :  2 nd July 20222</Text>
                    </Card.Content>
                </Card>   
                </View>
          
  
        </View>
  
        <View style={styles.content}>
          <Text style={styles.titletext}>Pay Now</Text>
                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
                </View> */}
           <View style={styles.pdetails}>
        <Card style={styles.card}>
                <Card.Content>
          <TextInput 
            placeholder='Amount'
            keyboardType='numeric'
  
          />
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




