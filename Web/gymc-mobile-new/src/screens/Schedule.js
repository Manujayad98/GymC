import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, Image } from 'react-native'
import React, { Component, useState,useEffect } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CustomButton from "../components/CustomButtonComponent";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { icons, COLORS, SIZES } from "../constans";
import axios from "axios";

const Schedule = () => {
  const [shouldShow, setShouldShow] = useState(true);

  // For custom SegmentedControlTab
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  // const date="2022-10-24";

  // const [ann, setAnnoucements] = useState([]);
  //   // console.log(ann.title);
  //   useEffect(() => {
  //       console.log("announcement get called");
  //       // 
  //       const setResponse = async (data) => {
  //           await axios
  //               .get("http://172.20.10.3:8080/api/v1/getTraineeWorkout/"+date+"/"+traineeId, {
  //                   headers: {
  //                       'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHWU1DIiwic3ViIjoiU3VkYW0iLCJpYXQiOjE2NjY1MjM2OTEsImV4cCI6MTY2Njg4MzY5MX0.R8xf3VfPSpMQruyFjjGLbOti7HljY_Jr05N2MuocmK0`
  //                   }
  //               })
  //               .then((res) => {
  //                   console.log(res.data)

  //                   // console.log(res.data[0])
  //                   setAnnoucements(res.data);
  //                   console.log(ann);
  //               })
  //               .catch((err) => {
  //                   console.log(err);
  //               });


  //       }
  //       setResponse();
  //   }, []);




  const handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setCustomStyleIndex(index);
  };

  return (
    // <View>
    //   <Text>Schedule</Text>
    // </View>
    <View style={{ flex: 1, padding: 20, backgroundColor: '#CAF0F8' }}>
      <ScrollView >
        <Text
          // onPress={() => navigation.navigate('Home')}
          style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>My Calendar
        </Text>
        <View
          style={{
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 6,
            marginTop: 6,
          }}
        />
        <Calendar
          style={styles.calandar}

          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            // dotColor: '#00adf5',
            // selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'black',
            indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}

          // initialDate={'2022-05-09'}

          // minDate={'2022-05-10'}

          // maxDate={'2022-05-30'}

          onDayPress={day => {
            console.log('selected day', day);
            navigation.navigate('Forgot');
            setShouldShow(!shouldShow);
          }}

          onDayLongPress={day => {
            console.log('selected day', day);
          }}

          monthFormat={'yyyy MM'}

          onMonthChange={month => {
            console.log('month changed', month);
          }}

          hideArrows={false}

          // renderArrow={direction => <Arrow />}

          // hideExtraDays={true}

          // disableMonthChange={true}

          firstDay={1}

          // hideDayNames={true}

          // showWeekNumbers={true}

          onPressArrowLeft={subtractMonth => subtractMonth()}

          onPressArrowRight={addMonth => addMonth()}

          ableAllTouchEventsForDisabledDays={true}

          renderHeader={date => {
            /*Return JSX*/
          }}

          enableSwipeMonths={true}

          onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}

          markedDates={{
            '2022-09-16': { selected: true, marked: true, selectedColor: 'blue' },
            '2022-09-17': { marked: true },
            '2022-09-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2022-09-19': { disabled: true, disableTouchEvent: true }
          }}
        />
        {shouldShow ? (
          // <Image
          //     source={{
          //         uri:
          //             'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          //     }}
          //     style={{ width: 250, height: 250 }}
          // />
          <View style={styles.newView}>
            <View style={styles.buttonContainer}>
              <CustomButton text="Start Assistant" type="PRIMARY" borderRadius={15} width={250} bgColor="#3DA2FF" />
            </View>
            <View style={styles.dateContainer}>
              <Text style={{ color: 'black' }}>2022 - 09 - 16</Text>
            </View>
            <View style={styles.container2}>
          
          {/* Simple Segmented with Custom Styling*/}
          <SegmentedControlTab
            values={['Workout Plan', 'Diet Plan']}
            selectedIndex={customStyleIndex}
            onTabPress={handleCustomIndexSelect}
            borderRadius={5}
            tabsContainerStyle={{ height: 50,width: 300, backgroundColor: '#F2F2F2',marginBottom:20 }}
            tabStyle={{
              backgroundColor: '#F2F2F2',
              borderWidth: 0,
              borderColor: 'transparent',
              borderRadius:5,
              alignItems:'center',
            }}
            activeTabStyle={{ backgroundColor: 'black' }}
            tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
            activeTabTextStyle={{ color: '#888888' }}
          />
          {customStyleIndex === 0 && (
            <>
                <DataTable
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
            />  </>
                  
          )}
          {customStyleIndex === 1 && (
            <><DataTable
            data={[
              { Nutrition: 'Protens', Calories: 100 },
              { Nutrition: 'Carbs', Calories: 45 },
              { Nutrition: 'Fats', Calories: 60 },
              
            ]} // list of objects
            colNames={['Nutrition', 'Calories']} //List of Strings
            colSettings={[
              { name: 'Nutrition', type: COL_TYPES.STRING, width: '70%' },
              { name: 'Calories', type: COL_TYPES.INT, width: '30%' },
            ]}//List of Objects
            noOfPages={1} //number
            backgroundColor={'#90E0EF'} //Table Background Color
            headerLabelStyle={{ color: 'black', fontSize: 15 }} //Text Style Works
          />
                </>
          
          )}
          
        </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#121928'
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
    marginBottom: 10
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  newView: {
    marginBottom: 20,
  },

  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 15,
    color: '#fff',
    marginBottom: 20
  }
  // tableStyles: {
  //     marginTop: 10,
  //     marginBottom: 10,
  //     backgroundColor: '#4A332E',
  //     borderTopLeftRadius: 10
  // }
})

export default Schedule