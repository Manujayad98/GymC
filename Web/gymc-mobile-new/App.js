import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Login,
  Home,
  ForgotPassword,
  LoginForm,
  ResetPassword,
  SettingUpOne,
  MyProgress,
  Notification,
  Appoinment,
  Feedback,
  Payments,
  Attendance,
  // Schedule
} from "./src/screens";
import Tabs from "./src/navigation/tabs";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import { store } from "./redux/store";
// import * as firebase from 'firebase';
// import { firebaseConfig } from "./config";

// firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Log"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SettingUpOne" component={SettingUpOne} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="feedback" component={Feedback} />
        <Stack.Screen name="appoinment" component={Appoinment} />
        <Stack.Screen name="payments" component={Payments} />
        <Stack.Screen name="attendance" component={Attendance} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Schedule" component={Schedule} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
