import React, { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Header from "../components/HeaderComponent";
import { COLORS } from "../constans";
import * as ImagePicker from 'expo-image-picker';


import { TextInput , Button} from 'react-native-paper'
// import imag from '../../assets/images/icon.png'



const App = () => {

  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  
  // For custom SegmentedControlTab
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setCustomStyleIndex(index);
  };

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  if (selectedImage !== null) {
    return (
     
      <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      {/* <Header title={"GYMC"} />  */}
      <ScrollView>
      <View style={styles.root}>
        
      
      <View style={styles.container}>
      
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      
       
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.imagebutton}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        {/* <UploadImage/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:650}}>Sumudu Perera</Text>
        <Text style={{marginBottom:5,fontSize:14,fontWeight:500,color:'grey'}}>Trainee</Text> */}
      </View>
        <View style={styles.container2}>
          
          {/* Simple Segmented with Custom Styling*/}
          <SegmentedControlTab
            values={['Account', 'Reset Password']}
            selectedIndex={customStyleIndex}
            onTabPress={handleCustomIndexSelect}
            borderRadius={5}
            tabsContainerStyle={{ height: 50,width: 300, backgroundColor: '#F2F2F2',marginBottom:20 }}
            tabStyle={{
              backgroundColor: '#F2F2F2',
              borderWidth: 0,
              borderColor: 'transparent',
              borderRadius:5,
            }}
            activeTabStyle={{ backgroundColor: 'black' }}
            tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
            activeTabTextStyle={{ color: '#888888' }}
          />
          {customStyleIndex === 0 && (
            <><TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} />
                <TextInput
                  label="Phone"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="pencil" />}
                  style={styles.top} />
                 <TextInput
                  label="Address"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="pencil" />}
                  style={styles.top} />
                  <TextInput
                  label="Email"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="pencil" />}
                  style={styles.top} />
                  <TextInput
                  label="Date of Birth"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="pencil" />}
                  style={styles.top} />
                  <TextInput
                  label="NIC"
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon icon="pencil" />}
                  style={styles.top} /> 
                  <View style={{flexDirection:'row'}}>
                  <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.updatebutton} >
                    Update
                  </Button>
                  <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
                    Log Out
                  </Button>
                </View>
                  </>
                  
          )}
          {customStyleIndex === 1 && (
            <><TextInput
              label="Current Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.top} />
              <TextInput
                label="New Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />} 
                style={styles.top}/>
                <TextInput
                label="Confirm Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />} 
                style={styles.top}/>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.updatebutton} >
                  Update
                </Button>
                </>
          
          )}
          
        </View>
      </View>
      </ScrollView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
    {/* <Header title={"GYMC"} />  */}
    <ScrollView>
    <View style={styles.root}>
      
    
    <View style={styles.container}>
    <Image source={{ uri: 'https://www.pngfind.com/mpng/hJmwxix_image-placeholder-png-user-profile-placeholder-image-png/' }} style={styles.thumbnail} />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.imagebutton}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      {/* <UploadImage/>
      <Text style={{marginTop:20,fontSize:18,fontWeight:650}}>Sumudu Perera</Text>
      <Text style={{marginBottom:5,fontSize:14,fontWeight:500,color:'grey'}}>Trainee</Text> */}
    </View>
      <View style={styles.container2}>
        
        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['Account', 'Reset Password']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={5}
          tabsContainerStyle={{ height: 50,width: 300, backgroundColor: '#F2F2F2',marginBottom:20 }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius:5,
          }}
          activeTabStyle={{ backgroundColor: 'black' }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {customStyleIndex === 0 && (
          <><TextInput
              label="Name"
              value={name}
              onChangeText={name => setName(name)}
              right={<TextInput.Icon icon="pencil" />}
              style={styles.top} />
              <TextInput
                label="Phone"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} />
               <TextInput
                label="Address"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} />
                <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} />
                <TextInput
                label="Date of Birth"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} />
                <TextInput
                label="NIC"
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="pencil" />}
                style={styles.top} /> 
                <View style={{flexDirection:'row'}}>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.updatebutton} >
                  Update
                </Button>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>
                  Log Out
                </Button>
              </View>
                </>
                
        )}
        {customStyleIndex === 1 && (
          <><TextInput
            label="Current Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            style={styles.top} />
            <TextInput
              label="New Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />} 
              style={styles.top}/>
              <TextInput
              label="Confirm Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />} 
              style={styles.top}/>
              <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.updatebutton} >
                Update
              </Button>
              </>
        
        )}
        
      </View>
    </View>
    </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {

    alignSelf: 'center',
    // justifyContent:'center',
    padding: 20,
    backgroundColor: '#CAF0F8',
    height: 1000,
    textAlign: 'left',
    width: '100%',
    color: 'black',
},

thumbnail: {
  width: 200,
  height: 200,
  resizeMode: "contain",
  borderRadius:'100%'
},
 
  container: {
    padding:20,
    // backgroundColor: '#CAF0F8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container2: {
    padding:5,
    // backgroundColor: '#CAF0F8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  top: {
    backgroundColor: "#90E0EF",
    borderColor:'white',
    borderRadius: 5,
    height:45,
    marginTop:10,
    width:'90%',
    fontSize:14
  },
  updatebutton: {
    backgroundColor: "#0077B6",
    borderColor:'white',
    borderRadius: 5,
    height:40,
    marginTop:20,
    width:'40%',
    fontSize:14,
    marginHorizontal:10,
    alignItems:'center'
  },
  imagebutton: {
    backgroundColor: "#0077B6",
    borderColor:'white',
    borderRadius: 5,
    height:40,
    marginTop:20,
    width:'40%',
    fontSize:14,
    marginHorizontal:10,
    alignItems:'center'
  },
  button: {
    backgroundColor: "red",
    borderColor:'white',
    borderRadius: 5,
    height:40,
    marginTop:20,
    width:'40%',
    fontSize:14,
    marginHorizontal:10,
    alignItems:'center'
  },
  header: {
    paddingLeft: '50%',
    width: '100%',
    height: '10%',
    alignContent: 'right',
    // backgroundColor: '#eee',
    color: 'black',

},
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
    width:'50',
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});
