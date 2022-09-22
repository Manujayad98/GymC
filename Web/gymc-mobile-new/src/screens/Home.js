import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/HeaderComponent";
import { icons, COLORS, SIZES } from "../constans";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <Header title={"GYMC"} />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
