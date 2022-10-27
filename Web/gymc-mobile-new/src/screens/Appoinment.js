import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../components/CustomButtonComponent";
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import axios from "axios";




const Appoinment = ({ navigation }) => {

  const _goBack = () => navigation.navigate('Tabs');
  const [ann, setAnnoucements] = useState([]);

  const id = "T0004";
  useEffect(() => {
    console.log("announcement get called");
    // 
    const setResponse = async (data) => {
        await axios
          .get("http://192.168.8.101:8080/api/v1/myappointments/"+id, {
            headers: {
              'Authorization': `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHWU1DIiwic3ViIjoiU3VkYW0gTXVuYXNpbmdoZSIsImlhdCI6MTY2Njg0MTc2OCwiZXhwIjoxNjY2ODc3NzY4fQ.L2A2vdvc6_c5NK_fvOtNVj_PrJ5T9d5nhNCW4FeHmMA`
            }})
          .then((res) => {
            console.log("Appoinments came:",res.data)
            
            // console.log(res.data[0])
            setAnnoucements(res.data);
            console.log(ann);
          })
          .catch((err) => {
            console.log(err);
          });


    }
    setResponse();
  },[]);

  const [selectedDate, setSelectedDate] = useState("");

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: '9.00 AM', value: '9.00' },
    { label: '9.30 AM', value: '9.30' }
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: '9.00 AM', value: '9.00' },
    { label: '9.30 AM', value: '9.30' }
  ]);

  const getTimeSLots = async (data) => {
    console.log(data);

  }

  return (
  
    <View style={{ flex: 1, backgroundColor: '#CAF0F8' }}>
      <Appbar.Header style={styles.top}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Appointment" />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        {/* <Text
          // onPress={() => navigation.navigate('Home')}
          style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginTop: 10 }}>New Appointment
        </Text>
        <View
          style={{
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 20,
            marginTop: 20,
          }}
        /> */}
    
        <View>
          {/* <DataTable
            data={[
              { Exercise: 'Sreching & Warmup', Repititions: 21 },
              { Exercise: 'Bench press', Repititions: 22 },
              { Exercise: 'Incline Press', Repititions: 21 },
              { Exercise: 'Barbell push press ', Repititions: 22 },
              { Exercise: 'Goblet squat', Repititions: 20 },
              { Exercise: 'Dumbbell single arm row ', Repititions: 13 }
            ]} // list of objects
            colNames={['Exercise', 'Repititions']} //List of Strings
            colSettings={[
              { name: 'Exercise', type: COL_TYPES.STRING, width: '70%' },
              { name: 'Repititions', type: COL_TYPES.INT, width: '30%' },
            ]}//List of Objects
            noOfPages={2} //number
            backgroundColor={'#90E0EF'} //Table Background Color
            headerLabelStyle={{ color: 'black', fontSize: 15 }} //Text Style Works
          /> */}
          {/* <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-06</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-08</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-10</Paragraph>
            </Card.Content>
          </Card> */}
          </View>
          <Text
            onPress={() => navigation.navigate('Home')}
            style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginTop:30}}>Upcomming Appointments
          </Text>
          <View style={styles.notificationbody}>
                            {console.log(ann)}
                        {ann.map((ann) => (
                                <Card style={styles.item}>
                                    <Card.Content>
                                        <Paragraph  style={styles.announcementNote} key={ann.appointmentID}>Appointment ID : {ann.appointmentID}</Paragraph>
                                        <Paragraph style={styles.announcementNote}>Appointment Date : {ann.date}</Paragraph>
                                        <Paragraph style={styles.announcementNote}>Start Time : {ann.start_time}</Paragraph>
                                        <Paragraph style={styles.announcementNote}>End Time : {ann.end_time}</Paragraph>
                                        <Paragraph style={styles.announcementNote}>Trainer ID : {ann.staff_id}</Paragraph>
                                    </Card.Content>
                                </Card>
                        ))}
                        
                            
                        </View>
        <View style={{ height: 300 , zIndex:999}}>
          <Text
            onPress={() => navigation.navigate('Home')}
            style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>New Appointment
          </Text> 
          <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 20,
              marginTop: 6,
            }}
          />
          <View style={styles.dropDownList}>
            <View style={styles.dropDownListOneItem}>
              <Text style={styles.dropDownTopic}>Date</Text>
              <DropDownPicker
                open={open1}
                value={value1}
                items={items1}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setItems1}
                style={styles.dropDown}
              />
            </View>
            <View>
              <Text style={styles.dropDownTopic}>Time</Text>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                style={styles.dropDown}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton style={styles.addBtn} text="Add" type="PRIMARY" borderRadius={15} width={150} bgColor="#3DA2FF" />
          </View>
        </View>
        <View>
          
          {/* <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 20,
              marginTop: 6,
            }}
          /> */}
          {/* <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-06</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-08</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ marginBottom: 20, backgroundColor: '#90E0EF' }}>
            <Card.Content>
              <Title style={{ color: '#000' }}>With Trainer: S.M.Munasinghe</Title>
              <Paragraph style={{ color: 'gray' }}>Date: 2022-09-10</Paragraph>
            </Card.Content>
          </Card> */}
        </View>

      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#121928',
    width: 360
  },
  top: {
    backgroundColor: "#000",
    marginBottom: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  calandar: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 380,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  },
  text: {
    fontSize: 42,
  },
  dropDownList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropDownListOneItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  dropDownTopic: {
    color: '#000',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  dropDown: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
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
item: {
  backgroundColor: '#90E0EF',
  color: 'black',
  // padding: 40,
  marginVertical: 7,
  marginHorizontal: 5,
  borderRadius: 5
},
});

export default Appoinment