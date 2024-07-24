import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";

import { COLORS, icons, images, SIZE, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home = () => {
  const router = useRouter();

  return (
    <Text>Welcome</Text>
  );
};

export default Home;
