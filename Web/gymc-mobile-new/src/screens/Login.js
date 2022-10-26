import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput
} from "react-native";
import CustomInput from "../components/CustomInputComponent";
import CustomButton from "../components/CustomButtonComponent";
// import SocialSignInButtons from "../components/SocialSignInButtons.component";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
// import { useSelector, useDispatch } from "react-redux";
// import { UserLogin } from '../store/actions';
import { LogBox } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs();

// const URL = "https://localhost:5000/api/v1/auth/login";
const baseUrl = "https://10.22.167.203:8080/api/v1";

const Login = () => {
  const [role, setRole] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  // const { Login } = useContext(AuthContext);

  //   const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (userToken != "") {
      console.log(userToken)
    }
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(userName);
  console.log(password);

  const onSignInPressed = async (data) => {
    // navigation.navigate("Tabs", "1");
    if (!userName || !password) {

      setClick({ click: true, })

    } else {
      axios
        .post("http://192.168.43.134:8080/api/v1/auth/login", {
          userName,
          password,
        })
        .then((res) => {
          console.log("sign in response: ", res.data);
          // navigation.navigate("Tabs", "1");
          const token = res.data;
          setUserToken(res.data);

          AsyncStorage.setItem("userToken", JSON.stringify(userToken));
          // getUser();
        })
        .catch((e) => {
          console.log("log in error: ", e);
          alert("Somthing went wrong. Check credentials again !!!");
        });
    }


    console.log(userName);
    console.log(userToken);
    // try {
    //   const response = await axios.post(`${baseUrl}/auth/login`, {
    //     userName,
    //     password,
    //   });
    //   if (response.status === 200) {
    //     alert(` You have created: ${JSON.stringify(response.data)}`);
    //     console.log(response.data);
    //   } else {
    //     throw new Error("An error has occurred1");
    //   }
    // } catch (error) {
    //   alert("An error has occurred2");
    // }

    // try {
    //   let response = await fetch('http://192.168.8.187:5000/api/v1/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: data.username,
    //       password: data.password,
    //     })
    //   });

    //   let result = await response.json();

    //   const privateData = {
    //     "token": result.accessToken.toString(),
    //     "userID": result._id.toString(),
    //     "type": result.selectUser.toString()
    //   }

    //   dispatch(UserLogin(privateData));

    //   reset();

    //   if (privateData.type.toString() == "1") {
    //     alert("Role - User");
    //     navigation.navigate("Tabs","1");
    //   } else if(privateData.type.toString() == "0"){
    //     alert("Role - Worker");
    //     navigation.navigate("Tabs","0");
    //   }else {
    //     alert("User role incorrect!");
    //   }
    // }catch(err){
    //   console.log("Something Worng");
    //   alert("Username or Password is incorrect!");
    // }
  };
  const getUser = async () => {
    if (userToken != null) {
      try {
        // const savedUser = await AsyncStorage.getItem("userToken");
        // const currentUser = JSON.parse(savedUser);
        // console.log(currentUser);
        const value = await AsyncStorage.getItem('userToken');
        console.log(value);
        console.log("not null called", userToken.size);
        var decoded = jwt_decode(userToken);
        console.log("decoded values: ", decoded);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    console.log("Press register");
    // navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.root}>
        <Image
          source={{ uri: "https://res.cloudinary.com/midefulness/image/upload/v1662930766/GYM/Lovely_kids_training_in_gym_together_gftd9o.jpg" }}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        {/* <CustomInput
          name="username"
          value={userName}
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
          onchange={(userName) => setUserName(userName)}
        /> */}
        <View
          style={[
            styles.container2,
          ]}>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            // onBlur={onBlur}
            placeholder="Username"
            required="Username is required"
          // style={styles.input}
          // secureTextEntry={secureTextEntry}
          />

        </View>
        {!userName && click && <Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: '3' }}>Username is required</Text>}

        {/* <CustomInput
          name="password"
          value={password}
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        /> */}
        <View
          style={[
            styles.container2,
          ]}>
          <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            // onBlur={onBlur}
            placeholder="Password"
            // style={styles.input}
            required="Password is required"
            minLength={3}
            secureTextEntry
          />
          {/* <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text> */}
        </View>
        {!password && click && <Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: '3' }}>Password is required</Text>}

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        //   bgColor="#E7EAF4"
        //   fgColor="#4765A9"
        />

        {/* {Platform.OS === "android" ? <SocialSignInButtons /> : null} */}

        {/* <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CAF0F8",
  },
  root: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    // position: "absolute",
    // top: 0,
    // left: 0,
    // margin:"auto",
    // right: 0,
    // bottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 20,
    // backgroundColor:'red',
  },
  logo: {
    // width: "70%",
    width: 200,
    maxWidth: 300,
    maxHeight: 200,
  },

  container2: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  input: {},
});

export default Login;
