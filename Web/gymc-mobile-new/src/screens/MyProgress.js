import { View, Text, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React from "react";
import Header from "../components/HeaderComponent";
import { icons, COLORS, SIZES } from "../constans";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Chart } from "react-google-charts";


const Home = () => {


    const LineData = [
      ['x', 'Biceps', 'Forearm', 'Chest', 'Thighs', 'Hips'],
      [0, 0, 0, 0, 0, 0],
      [1, 10, 5, 4, 6, 7],
      [2, 23, 15, 4, 14, 18],
      [3, 17, 9, 35, 22, 28],
      [4, 18, 10, 14, 17, 25],
      [5, 9, 5, 11, 21, 33],
      [6, 11, 3, 16, 17, 44],
      [7, 27, 19, 33, 44, 56],
    ]
    const LineChartOptions = {
      hAxis: {
        title: 'Time', viewWindow: { min: 0, max: 10 }
      },
      vAxis: {
        title: '',
      },
      series: {
        1: { curveType: 'function' },
      },
    }
    const chartEvents = [
      {
        callback: ({ chartWrapper, google }) => {
          const chart = chartWrapper.getChart();
          chart.container.addEventListener("click", (ev) => console.log(ev))
        },
        eventName: "ready"
      }
    ];
  

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
    {/* <Header title={"GYMC"} />  */}
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
                    <Text style={styles.sectionHeader}>My Progess</Text>
                    <View >
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center' ,paddingBottom:20}}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#000' }} />
                    </View> */}
                       
                    <Chart
                      width={'100%'}
                      height={'100%'}
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      data={LineData}
                      options={LineChartOptions}
                      rootProps={{ 'data-testid': '2' }}
                      chartEvents={chartEvents}
                    />   
                    </View>
                

                </View>


            </View>
        </ScrollView></View>
  );
};

export default Home;

const styles = StyleSheet.create({

  root: {

      alignSelf: 'center',
      // justifyContent:'center',
      padding: 20,
      backgroundColor: '#CAF0F8',
      height: 700,
      textAlign: 'left',
      width: '100%',
      color: 'black',
  },


  homecontainer: {
      flex: 1,
  },
  header: {
      paddingLeft: '50%',
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
      fontWeight: 'bold',


  },

  cardbody: {
      color: 'black',
      width: '90%',
      height: '30%',
      padding: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderTopColor: 'black',
      borderTopWidth: StyleSheet.hairlineWidth,
      marginLeft:20
  },
 
})
